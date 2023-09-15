import { Tree, Rule, noop } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import { Change, InsertChange } from '@schematics/angular/utility/change';
import { addRouteDeclarationToModule, insertImport } from '@schematics/angular/utility/ast-utils';
import { addDeclarationToModule, addModuleImportToModule } from '@angular/cdk/schematics';
import { readIntoSourceFile } from './insert';

export function addModule(filePath: string, moduleName: string, modulePath: string): Rule {
  return (tree: Tree) => {
    addModuleImportToModule(tree, filePath, moduleName, modulePath);

    return tree;
  };
}

export function addDeclaration(componentName: string, modulePath: string, relativePath: string): Rule {
  return (tree: Tree) => {
    const source = readIntoSourceFile(tree, modulePath);
    const declarationChanges = addDeclarationToModule(source, modulePath, componentName, relativePath);
    const declarationRecorder = tree.beginUpdate(modulePath);

    for (const change of declarationChanges) {
      if (change instanceof InsertChange) {
        declarationRecorder.insertLeft(change.pos, change.toAdd);
      }
    }

    tree.commitUpdate(declarationRecorder);

    return noop();
  };
}

export function addRouteToNgModule(tree: Tree, path: string, componentName: string, routePath: string, relativePath: string): Tree {
  const sourceFile = readIntoSourceFile(tree, path);
  const routeDeclarationChange = addRouteDeclarationToModule(sourceFile, path, buildRoute(routePath, componentName));

  const symbolName = `${strings.classify(componentName)}Component`;

  const importChange = insertImport(sourceFile, path, symbolName, relativePath);

  let changes: Change[] = [];
  changes.push(routeDeclarationChange);
  changes.push(importChange);

  const recorder = tree.beginUpdate(path);
  for (const change of changes) {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  }

  tree.commitUpdate(recorder);

  return tree;
}

export function getPageNameFromFilePath(filePath: string): string {
  let pathArray = filePath.split(/(\/|\\)/);
  let pageName = pathArray[pathArray.length - 1];
  return pageName;
}

export function getRoutingModule(tree: Tree, modulePath: string): string | undefined {
  const routingModulePath = modulePath.endsWith('-routing.module.ts') ? modulePath : modulePath.replace('.module.ts', '-routing.module.ts');
  return tree.exists(routingModulePath) ? routingModulePath : undefined;
}

export function getModuleName(modulePath: string): string {
  const module = modulePath.endsWith('.module.ts') ? modulePath.replace('.module.ts', '') : modulePath;
  const moduleArr = module.split('/');
  return moduleArr[moduleArr.length - 1];
}

function buildRoute(routePath: string, componentName: string): string {
  // options.routePath
  return `{ path: '${routePath}', component: ${strings.classify(componentName)}Component }`;
}
