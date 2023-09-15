import { chain, Rule } from '@angular-devkit/schematics';
import { addModule } from '../utils';
import { Schema as PluginOptions } from './schema';

export default function (options: PluginOptions): Rule {
  return () => {
    // 引入相关组件module
    return chain([addModule(options.modulePath, options.insertModuleName, 'ng-devui')]);
  };
}
