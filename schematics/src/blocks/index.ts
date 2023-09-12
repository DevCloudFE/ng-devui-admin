import { strings } from '@angular-devkit/core';
import { chain, Rule, schematic, SchematicsException, Tree } from '@angular-devkit/schematics';
import { buildRelativePath, findModule } from '@schematics/angular/utility/find-module';
import {
  addModule,
  getPageNameFromFilePath,
  getSourceNodes,
  insertHTMLFile,
  insertStyleFile,
  insertTSFile,
  readIntoSourceFile,
} from '../utils';
import { Schema as BlockOptions } from './schema';
import * as fs from 'fs';
import * as path from 'path';
import ts = require('typescript');

function readFileIntoString(tree: Tree, filePath: string): string {
  const buffer = tree.read(filePath);
  let strContent = '';
  if (buffer) strContent = buffer.toString('utf-8');
  return strContent;
}

function readTsFileContent(tree: Tree, filePath: string): { methods: string; properties: string } {
  const methods: string[] = [];
  const properties: string[] = [];

  const sourceFile = readIntoSourceFile(tree, filePath);

  const nodes: ts.Node[] = getSourceNodes(sourceFile);

  nodes.forEach((n) => {
    if (n.kind === ts.SyntaxKind.MethodDeclaration) {
      methods.push('\n\t' + n.getText());
    }
    if (n.kind === ts.SyntaxKind.PropertyDeclaration) {
      properties.push('\n\t' + n.getText());
    }
  });

  return {
    methods: methods.join(''),
    properties: properties.join('') + '\n',
  };
}

function genAddModulesRules(modules: string[], modulePath: string): Rule {
  let rules: Rule[] = [];
  modules.forEach((m) => {
    rules.push(
      schematic('plugin', {
        modulePath: modulePath,
        insertModuleName: m,
      })
    );
  });
  return chain(rules);
}

function getBlockInfo(tree: Tree, blockPath: string): { componentModules: string[]; selector: string } {
  let blockPackage = null;
  const blockPackageBuffer = tree.read(blockPath);
  if (blockPackageBuffer) {
    blockPackage = JSON.parse(blockPackageBuffer.toString());
  } else {
    throw new SchematicsException(`Cannot find block ${blockPath}, please download first.`);
  }

  return {
    componentModules: blockPackage['blockConfig']['componentModules'],
    selector: blockPackage['blockConfig']['selector'],
  };
}

function writeBlock(tree: Tree, srcPath: string, desPath: string): void {
  let buffer = tree.read(srcPath);
  if (buffer) {
    tree.create(desPath, buffer);
  }
}

function insertOptions(
  tree: Tree,
  options: BlockOptions,
  blockInfo: { componentModules: string[]; selector: string },
  modulePath: string
): Rule {
  const blockContent = readTsFileContent(
    tree,
    `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/src/${strings.dasherize(options.blockName)}.component.ts`
  );

  if (options.importWay === 'by-code') {
    return chain([
      insertTSFile(
        `${options.dirPath}/${getPageNameFromFilePath(options.dirPath)}.component.ts`,
        'property',
        blockContent.properties,
        `${strings.classify(getPageNameFromFilePath(options.dirPath))}Component`
      ),
      insertTSFile(`${options.dirPath}/${getPageNameFromFilePath(options.dirPath)}.component.ts`, 'method', blockContent.methods),
      insertHTMLFile(
        `${options.dirPath}/${getPageNameFromFilePath(options.dirPath)}.component.html`,
        readFileIntoString(
          tree,
          `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/src/${strings.dasherize(
            options.blockName
          )}.component.html`
        )
      ),
      insertStyleFile(
        `${options.dirPath}/${getPageNameFromFilePath(options.dirPath)}.component.scss`,
        readFileIntoString(
          tree,
          `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/src/${strings.dasherize(
            options.blockName
          )}.component.scss`
        )
      ),
      genAddModulesRules(blockInfo.componentModules, modulePath),
    ]);
  } else {
    const srcPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'node_modules',
      `ng-devui-materials/${strings.dasherize(options.blockName)}/src`
    );
    fs.readdirSync(srcPath).forEach((p) => {
      if (fs.statSync(`${srcPath}/${p}`).isDirectory()) {
        fs.readdirSync(`${srcPath}/${p}`).forEach((d) => {
          if (fs.statSync(`${srcPath}/${p}/${d}`).isDirectory()) {
            fs.readdirSync(`${srcPath}/${p}/${d}`).forEach((t) => {
              writeBlock(
                tree,
                `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/src/${p}/${d}/${t}`,
                `${options.dirPath}/${strings.dasherize(options.blockName)}/${p}/${d}/${t}`
              );
            });
          } else {
            writeBlock(
              tree,
              `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/src/${p}/${d}`,
              `${options.dirPath}/${strings.dasherize(options.blockName)}/${p}/${d}`
            );
          }
        });
      } else {
        writeBlock(
          tree,
          `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/src/${p}`,
          `${options.dirPath}/${strings.dasherize(options.blockName)}/${p}`
        );
      }
    });
    const relativeModulePath = buildRelativePath(
      modulePath,
      `/${options.dirPath}/${strings.dasherize(options.blockName)}/${strings.dasherize(options.blockName)}.module`
    );
    return chain([
      addModule(modulePath, `${strings.classify(options.blockName)}Module`, relativeModulePath!),
      insertHTMLFile(
        `${options.dirPath}/${getPageNameFromFilePath(options.dirPath)}.component.html`,
        `<${blockInfo.selector}></${blockInfo.selector}>`
      ),
    ]);
  }
}

export default function (options: BlockOptions): Rule {
  return (tree: Tree) => {
    const modulePath = findModule(tree, options.dirPath);

    const blockInfo = getBlockInfo(tree, `node_modules/ng-devui-materials/${strings.dasherize(options.blockName)}/package.json`);

    return chain([insertOptions(tree, options, blockInfo, modulePath)]);
  };
}
