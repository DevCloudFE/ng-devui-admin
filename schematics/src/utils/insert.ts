import { Rule, SchematicsException, Tree } from '@angular-devkit/schematics';
import { InsertChange } from '@schematics/angular/utility/change';
import ts = require('typescript');

export function getSourceNodes(sourceFile: ts.SourceFile): ts.Node[] {
  const nodes: ts.Node[] = [sourceFile];
  const result = [];

  while (nodes.length > 0) {
    const node = nodes.shift();

    if (node) {
      result.push(node);
      if (node.getChildCount(sourceFile) >= 0) {
        nodes.unshift(...node.getChildren());
      }
    }
  }

  return result;
}

export function readIntoSourceFile(tree: Tree, filePath: string): ts.SourceFile {
  const text = tree.read(filePath);
  if (text === null) {
    throw new SchematicsException(`${filePath} does not exist.`);
  }

  const sourceText = text.toString('utf-8');

  return ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true);
}

export function insertTSFile(filePath: string, type: 'property' | 'method', insertText: string, targetText?: string): Rule {
  return (tree: Tree) => {
    const sourceFile = readIntoSourceFile(tree, filePath);

    const nodes: ts.Node[] = getSourceNodes(sourceFile);
    let componentNode = null;
    let componentNodeSiblings = null;
    let expressionNode = null;

    if (type === 'property') {
      // Find the target position according to kind and text
      componentNode = nodes.find((n) => n.kind === ts.SyntaxKind.Identifier && n.getText() === targetText);
    } else {
      componentNode = nodes.find((n) => n.kind === ts.SyntaxKind.Constructor);
    }

    if (!componentNode || !componentNode.parent) {
      throw new SchematicsException(`expected ${filePath} is a ts file.`);
    }

    if (type === 'property') {
      componentNodeSiblings = componentNode.parent.getChildren();

      // Find the position of node in syntax tree.
      let componentNodeIndex = componentNodeSiblings.indexOf(componentNode);

      // split syntax tree with node position
      componentNodeSiblings = componentNodeSiblings.slice(componentNodeIndex);
    }

    if (type === 'property' && componentNodeSiblings) {
      // Find the position of OpenBrackToken
      expressionNode = componentNodeSiblings.find((n) => n.kind === ts.SyntaxKind.OpenBraceToken);
    } else if (type === 'method') {
      // Find the position of Constructor
      expressionNode = componentNode;
    }

    if (!expressionNode) {
      throw new SchematicsException('The target component node is not defined');
    }

    let change = new InsertChange(filePath, expressionNode.getEnd(), insertText);

    const declarationRecorder = tree.beginUpdate(filePath);
    if (change instanceof InsertChange) {
      declarationRecorder.insertRight(change.pos, change.toAdd);
    }
    tree.commitUpdate(declarationRecorder);

    return tree;
  };
}

export function insertTSArray(
  tree: Tree,
  path: string,
  insertText: string,
  targetText: string,
  insertPosition: 'start' | 'end' = 'end'
): Tree {
  const sourceFile = readIntoSourceFile(tree, path);

  const nodes: ts.Node[] = getSourceNodes(sourceFile);

  let componentNodeSiblings = null;
  let expressionNode = null;

  // Find the target position according to kind and text
  const componentNode = nodes.find(
    (n) => (n.kind === ts.SyntaxKind.Identifier || n.kind === ts.SyntaxKind.PropertyAccessExpression) && n.getText() === targetText
  );

  if (!componentNode || !componentNode.parent) {
    throw new SchematicsException(`expected ${path} is a ts file.`);
  }

  componentNodeSiblings = componentNode.parent.getChildren();

  // Find the position of node in syntax tree.
  let componentNodeIndex = componentNodeSiblings.indexOf(componentNode);

  // split syntax tree with node position
  componentNodeSiblings = componentNodeSiblings.slice(componentNodeIndex);

  // Find the position of array
  expressionNode = componentNodeSiblings.find((n) => n.kind === ts.SyntaxKind.ArrayLiteralExpression);

  if (!expressionNode) {
    throw new SchematicsException('The target component node is not defined');
  }

  // If you want to insert into an object or array
  let listNode = expressionNode.getChildren().find((n) => n.kind === ts.SyntaxKind.SyntaxList);

  if (!listNode) {
    throw new SchematicsException(`${targetText} list node is not defined`);
  }

  let changePosition = insertPosition === 'start' ? listNode.getStart() : listNode.getEnd();

  let change = new InsertChange(path, changePosition, insertText);

  const declarationRecorder = tree.beginUpdate(path);
  if (change instanceof InsertChange) {
    declarationRecorder.insertRight(change.pos, change.toAdd);
  }
  tree.commitUpdate(declarationRecorder);

  return tree;
}

export function insertHTMLFile(filePath: string, content: string): Rule {
  return (tree: Tree) => {
    const buffer = tree.read(filePath);
    let strContent = '';
    if (buffer) strContent = buffer.toString('utf-8');

    const appendIndex = strContent.lastIndexOf('</div>');

    if (appendIndex < 0) {
      throw new SchematicsException('Please make sure your template is wrapped within a "div" tag');
    }

    const updatedContent = strContent.slice(0, appendIndex) + `\t${content}\n` + strContent.slice(appendIndex);

    tree.overwrite(filePath, updatedContent);

    return tree;
  };
}

export function insertStyleFile(filePath: string, content: string): Rule {
  return (tree: Tree) => {
    const buffer = tree.read(filePath);
    let strContent = '';
    if (buffer) strContent = buffer.toString('utf-8');

    const updatedContent = strContent + content;

    tree.overwrite(filePath, updatedContent);

    return tree;
  };
}
