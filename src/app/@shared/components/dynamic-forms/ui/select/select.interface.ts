/***************************************************************************************************
 * For details about the description of each configuration item, please see  APIs of d-select  and dValidateRules parameters of d-form.
 * https://devui.design/components/zh-cn/select/api  && https://devui.design/components/zh-cn/form/api#DValidateRules
 */

import { ConnectedPosition } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { DFormUI } from '../../form-item.interface';
import { DValidateRules, DPopConfig } from 'ng-devui';

export type AppendToBodyDirection = 'rightDown' | 'rightUp' | 'leftUp' | 'leftDown' | 'centerDown' | 'centerUp';

export interface SelectUI extends DFormUI {
  values?: Array<any>;
  options?: Array<any>;
  isSearch?: boolean;
  scrollHight?: string;
  highlightItemClass?: string;
  filterKey?: string;
  multiple?: boolean;
  isSelectAll?: boolean;
  readonly?: boolean;
  size?: '' | 'sm' | 'lg';
  disabled?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  searchFn?: (term: string) => Observable<Array<{ id: number; option: any }>>;
  direction?: 'up' | 'down' | 'auto';
  overview?: 'border' | 'underlined';
  enableLazyLoad?: boolean;
  extraConfig?: {
    labelization?: {
      enable: boolean;
      overflow?: 'normal' | 'scroll-y' | 'multiple-line' | string;
      containerMaxHeight?: string;
      labelMaxWidth?: string;
    };
  };
  optionDisabledKey?: string;
  optionImmutableKey?: string;
  keepMultipleOrder?: 'origin' | 'user-select';
  appendToBody?: boolean;
  appendToBodyDirections?: Array<AppendToBodyDirection | ConnectedPosition>;
  autoFocus?: boolean;
  toggleOnFocus?: boolean;
  width?: number;
  virtualScroll?: boolean;
  allowClear?: boolean;
  showAnimation?: boolean;
  validateRules?: DValidateRules;
  validatePopConfig?: DPopConfig;
  loadMore: ({ instance, event }: any) => void;
}
