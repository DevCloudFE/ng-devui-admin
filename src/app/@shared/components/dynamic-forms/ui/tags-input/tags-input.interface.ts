/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of d-tags-input and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/tags-input/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */ 

import { Observable } from 'rxjs';
import { DFormUI } from '../../form-item.interface';
import { DPopConfig, DValidateRules } from 'ng-devui';

export interface TagsInputUI extends DFormUI {
    tags: Array<any>;
    suggestionList?: Array<any>;
    displayProperty?: string;
    placeholder?: string;
    minLength?: number;
    maxLength?: number;
    maxTags?: number;
    spellcheck?: boolean;
    isAddBySpace?: boolean;
    caseSensitivity?: boolean;
    disabled?: boolean;
    showAnimation?: boolean;
    checkBeforeAdd?: (newTag: string) => boolean | Promise<boolean> | Observable<boolean>;
    validateRules?: DValidateRules;
    validatePopConfig?: DPopConfig;
}