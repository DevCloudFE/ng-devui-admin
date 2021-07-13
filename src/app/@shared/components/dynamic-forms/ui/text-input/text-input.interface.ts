/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of dTextInput and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/text-input/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */ 

import { DFormUI } from '../../form-item.interface';
import { DPopConfig, DValidateRules } from 'ng-devui';

export interface TextInputUI extends DFormUI {
   id?: string;
   type?: any;
   placeholder?: string;
   error?: boolean;
   disabled?: boolean;
   size?: 'sm'|''|'lg';
   values?: any;
   autocomplete?: 'on' | 'off';
   validateRules?: DValidateRules;
   validatePopConfig?: DPopConfig;
}