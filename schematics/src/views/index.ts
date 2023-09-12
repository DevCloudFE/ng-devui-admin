import { apply, chain, Rule, Tree, url, applyTemplates, move, mergeWith, schematic, SchematicsException } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Schema as ViewOptions } from './schema';
import { findModule, buildRelativePath } from '@schematics/angular/utility/find-module';
import { addDeclaration, addRouteToNgModule, getModuleName, getRoutingModule, insertTSArray } from '../utils';

function genAddMaterialsRules(blocks: string[], options: ViewOptions): Rule {
  let rules: Rule[] = [];
  blocks.forEach((block) => {
    rules.push(
      schematic('blocks', {
        blockName: block,
        dirPath: `${options.dirPath}/${strings.dasherize(options.viewName)}`,
        importWay: options.importWay,
      })
    );
  });

  return chain(rules);
}

function buildPageRoute(options: ViewOptions, modulePath: string): string {
  return `{ title: '${strings.classify(options.viewName)}', link: '/pages/${getModuleName(modulePath)}/${options.routePath}' },`;
}

export default function (options: ViewOptions): Rule {
  return (tree: Tree) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        viewName: options.viewName,
        style: options.style,
        selector: options.selector,
        dasherize: strings.dasherize,
        classify: strings.classify,
      }),
      move(options.dirPath),
    ]);

    // 创建空页面啊后，在插入的module中引入页面的declaration
    const modulePath = findModule(tree, options.dirPath);
    const componentName = `${strings.classify(options.viewName)}Component`;
    const relativePath = buildRelativePath(
      modulePath,
      `/${options.dirPath}/${strings.dasherize(options.viewName)}/${strings.dasherize(options.viewName)}.component`
    );

    let routingModulePath = getRoutingModule(tree, modulePath);
    if (routingModulePath) {
      addRouteToNgModule(tree, routingModulePath, options.viewName, options.routePath, relativePath);
      if (options.addToNav) {
        insertTSArray(tree, '/src/app/pages/pages.component.ts', buildPageRoute(options, modulePath), 'this.menu', 'end');
      }
    } else {
      throw new SchematicsException('Please make sure a routing module is existed.');
    }

    let blocks: string[] = [];

    if (options.blocks) {
      blocks = options.blocks.split(' ');
    }

    if (blocks.length > 0) {
      return chain([
        mergeWith(templateSource),
        addDeclaration(componentName, modulePath, relativePath),
        genAddMaterialsRules(blocks, options),
      ]);
    } else {
      return chain([mergeWith(templateSource), addDeclaration(componentName, modulePath, relativePath)]);
    }
  };
}
