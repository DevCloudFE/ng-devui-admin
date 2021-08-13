/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of d-toggle and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/toggle/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */

import { DFormUI } from '../../form-item.interface';
import { Observable } from 'rxjs';
import { DPopConfig, DValidateRules } from 'ng-devui';

export interface ToggleUI extends DFormUI {
  size?: 'sm' | '' | 'lg';
  color?: string;
  checked?: boolean;
  disabled?: boolean;
  beforeChange?: (value: any) => boolean | Promise<boolean> | Observable<boolean>;
  validateRules?: DValidateRules;
  validatePopConfig?: DPopConfig;
}
