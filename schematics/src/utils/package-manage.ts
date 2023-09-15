import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { ANGULAR_JSON_PATH, PACKAGE_JSON_PATH } from './constants';
import { readJson, writeJson } from './json-operation';

export type packgeType = 'dependencies' | 'devDependencies' | 'scripts';

export function readPackageJson(tree: Tree, type?: string): any {
  return readJson(tree, PACKAGE_JSON_PATH, type);
}

export function writePackageJson(tree: Tree, json: any): any {
  return writeJson(tree, PACKAGE_JSON_PATH, json);
}

export function addPackage(tree: Tree, packages: string | string[], type: packgeType = 'dependencies'): Tree {
  const packageJson = readPackageJson(tree, type);

  if (packageJson == null) {
    return tree;
  }

  if (!Array.isArray(packages)) {
    packages = [packages];
  }
  packages.forEach((pck) => {
    const splitPosition = pck.lastIndexOf('@');
    packageJson[type][pck.substr(0, splitPosition)] = pck.substr(splitPosition + 1);
  });

  writePackageJson(tree, packageJson);
  return tree;
}

export function modifyAngularJson(styles: string | string[], defaultProject: string): Rule {
  return (tree: Tree) => {
    if (!tree.exists(ANGULAR_JSON_PATH)) {
      throw new SchematicsException('Please make sure this is an Angular project.');
    }

    const angularJson = JSON.parse(tree.read(ANGULAR_JSON_PATH)!.toString('utf-8'));
    if (!Array.isArray(styles)) {
      styles = [styles];
    }

    angularJson.projects[defaultProject].architect.build.options.styles = styles;

    tree.overwrite(ANGULAR_JSON_PATH, JSON.stringify(angularJson, null, 2));
    return tree;
  };
}
