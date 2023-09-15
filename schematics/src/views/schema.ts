export interface Schema {
  viewName: string;
  dirPath: string;
  routePath: string;
  importWay: string;
  selector?: string;
  style?: string;
  blocks?: string;
  skipImport?: boolean;
  addToNav: boolean;
}
