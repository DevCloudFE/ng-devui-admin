import { Tree } from '@angular-devkit/schematics';

export function readJson(tree: Tree, file: string, type?: string): any {
  if (!tree.exists(file)) {
    return null;
  }

  const sourceFile = tree.read(file)!.toString('utf-8');
  try {
    const json = JSON.parse(sourceFile);
    if (type && !json[type]) {
      json[type] = {};
    }
    return json;
  } catch (error) {
    console.log(`Failed when parsing file ${file}.`);
    throw error;
  }
}

export function writeJson(tree: Tree, file: string, source: any): void {
  tree.overwrite(file, JSON.stringify(source, null, 2));
}
