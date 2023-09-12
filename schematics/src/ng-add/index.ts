import {
  apply,
  applyTemplates,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackage, modifyAngularJson, PACKAGE_JSON_PATH, ANGULAR_JSON_PATH, PACKAGES_I18N, STYLES, PACKAGES } from '../utils';
import * as fs from 'fs';
import * as path from 'path';
import { Schema as AddOptions } from './schema';

let projectWorkspace: {
  root: string;
  sourceRoot: string;
  defaultProject: string;
};

function getWorkSpace(tree: Tree) {
  let angularJSON;
  if (tree.read(ANGULAR_JSON_PATH)) {
    angularJSON = JSON.parse(tree.read(ANGULAR_JSON_PATH)?.toString() as string);
  } else {
    throw new SchematicsException('Please make sure the project is an Angular project.');
  }

  let defaultProject = Object.keys(angularJSON.projects)[0];
  projectWorkspace = {
    root: '/',
    sourceRoot: angularJSON.projects[defaultProject].sourceRoot,
    defaultProject,
  };

  return projectWorkspace;
}

function removeOriginalFiles() {
  return (tree: Tree) => {
    [
      `${projectWorkspace.root}/README.md`,
      `${projectWorkspace.root}/tslint.json`,
      `${projectWorkspace.sourceRoot}/main.ts`,
      `${projectWorkspace.sourceRoot}/index.html`,
      `${projectWorkspace.sourceRoot}/styles.scss`,
      `${projectWorkspace.sourceRoot}/styles.css`,
      `${projectWorkspace.sourceRoot}/favicon.ico`,
      `${projectWorkspace.sourceRoot}/app/app.module.ts`,
      `${projectWorkspace.sourceRoot}/app/app.component.spec.ts`,
      `${projectWorkspace.sourceRoot}/app/app.component.ts`,
      `${projectWorkspace.sourceRoot}/app/app.component.html`,
      `${projectWorkspace.sourceRoot}/app/app.component.scss`,
      `${projectWorkspace.sourceRoot}/app/app.component.css`,
      `${projectWorkspace.sourceRoot}/app/app-routing.module.ts`,
    ]
      .filter((f) => tree.exists(f))
      .forEach((f) => tree.delete(f));
  };
}

function modifyTsConfig(): Rule {
  return (tree: Tree) => {
    const configPath = path.join(__dirname, '..', '..', '..', '..', 'tsconfig.json');
    let content = fs.readFileSync(configPath, 'utf-8');
    let strContent;
    if (content) {
      strContent = JSON.parse(content.replace(/\/\*(.*?)\*\//, ''));
      strContent.compilerOptions['strict'] = false;
      strContent.compilerOptions['noImplicitReturns'] = false;
      strContent.angularCompilerOptions['strictPropertyInitialization'] = false;
    } else {
      throw new SchematicsException('Please make sure there is a tsconfig.json.');
    }

    tree.overwrite('tsconfig.json', JSON.stringify(strContent, null, 2));
    return tree;
  };
}

function addDependencies(options: AddOptions): Rule {
  return (tree: Tree) => {
    const packages = options.i18n ? PACKAGES_I18N : PACKAGES;
    addPackage(tree, packages, 'dependencies');
  };
}

function addLintFiles(options: AddOptions, tree: Tree): Rule {
  if (options.eslintFile) {
    addLintScripts(tree);
    return chain([mergeWith(apply(url('./files/lint-files'), [move(projectWorkspace.root)]))]);
  } else {
    return chain([]);
  }
}

function addLintScripts(tree: Tree) {
  let packageJson;
  if (tree.read(PACKAGE_JSON_PATH)) {
    packageJson = JSON.parse(tree.read(PACKAGE_JSON_PATH)?.toString() as string);
  } else {
    throw new SchematicsException('Please make sure there is a package.json file in your project.');
  }

  packageJson.scripts['prettier'] = 'prettier --config ./.prettierrc --write "src/app/pages/**/**/*.html"';
  packageJson.scripts['stylelint'] = 'stylelint "src/app/pages/**/**/*.{scss,css}" --config ./.stylelintrc.json --fix';
  packageJson.scripts['tslint'] = 'tslint --fix -c ./tslint.json "src/**/*{.ts}"';

  tree.overwrite(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2));
}

function addSourceFiles(options: AddOptions): Rule {
  return chain([
    mergeWith(
      apply(url('./files/src'), [
        applyTemplates({
          defaultLanguage: options.defaultLanguage,
          i18n: options.i18n,
          mock: options.mock,
        }),
        move(projectWorkspace.sourceRoot),
      ])
    ),
  ]);
}

function addI18nFiles(options: AddOptions): Rule {
  if (options.i18n) {
    return chain([mergeWith(apply(url('./files/i18n'), [move(`${projectWorkspace.sourceRoot}/assets/i18n`)]))]);
  } else {
    return chain([]);
  }
}

function addMockFiles(options: AddOptions): Rule {
  if (options.mock) {
    return chain([mergeWith(apply(url('./files/mock-files'), [move(`${projectWorkspace.sourceRoot}/app/@core`)]))]);
  } else {
    return chain([]);
  }
}

function installPackages(): Rule {
  return (_tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export default function (options: AddOptions): Rule {
  return (tree: Tree) => {
    getWorkSpace(tree);

    return chain([
      removeOriginalFiles(),
      modifyAngularJson(STYLES, projectWorkspace.defaultProject),
      modifyTsConfig(),
      addDependencies(options),
      addLintFiles(options, tree),
      addSourceFiles(options),
      addI18nFiles(options),
      addMockFiles(options),
      installPackages(),
    ]);
  };
}
