/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of d-radio and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/radio/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */

import { Observable } from 'rxjs';
import { DPopConfig, DValidateRules } from 'ng-devui';
import { DFormUI } from '../../form-item.interface';

export interface RadioUI extends DFormUI {
  values: Array<any>;
  value: any;
  cssStyle?: 'row' | 'column';
  disabled?: boolean;
  beforeChange?: (values: any) => boolean | Promise<boolean> | Observable<boolean>;
  validateRules?: DValidateRules;
  validatePopConfig?: DPopConfig;
}
