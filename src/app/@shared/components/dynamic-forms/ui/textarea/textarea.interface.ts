/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of dTextarea and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/textarea/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */ 

import { DFormUI } from '../../form-item.interface';
import { DPopConfig, DValidateRules } from 'ng-devui';

export interface TextAreaUI extends DFormUI {
   id?: string;
   placeholder?: string;
   values?: string;
   error?: boolean;
   disabled?: boolean;
   resize?: 'none' | 'vertical' | 'horizontal' | 'both' | 'inherit';
   validateRules?: DValidateRules;
   validatePopConfig?: DPopConfig;
}