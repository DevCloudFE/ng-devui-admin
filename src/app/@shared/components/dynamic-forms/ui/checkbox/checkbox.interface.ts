/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of d-checkbox and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/checkbox/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */

import { Observable } from 'rxjs';
import { DPopConfig, DValidateRules } from 'ng-devui';
import { DFormUI } from '../../form-item.interface';

export interface CheckboxUI extends DFormUI {
  name?: string;
  itemWidth?: number;
  color?: string;
  direction?: 'row' | 'column';
  isShowTitle?: boolean;
  disabled?: boolean;
  options?: Array<any>;
  filterKey?: string;
  showAnimation?: boolean;
  beforeChange?: (value: any) => boolean | Promise<boolean> | Observable<boolean>;
  values?: Array<any>;
  validateRules?: DValidateRules;
  validatePopConfig?: DPopConfig;
}
