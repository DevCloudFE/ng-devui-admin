# How to Use

Import into module:

```ts
import { DynamicFormsModule } from 'src/app/@shared/components/dynamic-forms/dynamic-forms.module';
```

In the page:

```html
<da-dynamic-forms
  [formItems]="formItems"
  (formSubmit)="submitForms($event)"
>
</da-dynamic-forms>
```
For details, see the example of the dynamic form page of the form block`src/app/pages/form/dynamic-form`。

## 参数
|    参数    |     类型     | 默认 | 说明           |
| :--------: | :----------: | :--: | :------------- | --- |
| formItems | `DFormData` |  --  | Required. Template Data |     |
|   layout   | `'horizontal'\|'vertical'\|'columns'` | 'horizontal' | Optional. Sets the form arrangement mode.  |
| labelSize  |         `'sm' \| '' \| 'lg'`          |      ''      | Optional. Sets the width of the label. If this parameter is not set, the default value is 100 px. 'sm' corresponds to 80 px, 'lg' corresponds to 150px. |
| labelAlign |    `'start' \| 'center' \| 'end'`     |   'start'    | Optional. This parameter specifies the label alignment mode in horizontal layout mode.  |
| formRules |  `DValidateRules`|  --    | Optional. Configure the verification rule. |
| formSubmitData |  `any`   |   --    | Optional. Configure the data that needs to be transferred and the submit callback event. |
|showSubmitBtn | `boolean` | true | Optional. Indicates whether to display the form submission button. Click this button to trigger the form submission. |
| showLoading | `boolean` | false | Optional. If [`DAsyncValidateRule`](https://devui.design/components/en-us/form/api#DAsyncValidateRule) is set for the form, the loading status is displayed after you click Submit. |
|submitBtnContent| `string` | 'Submit' | Optional. Content of submit button. |
|showResetBtn | `boolean` | true | Optional. Indicates whether to display the form reset button. Click this button to trigger the form reset. |
|resetBtnContent| `string` | 'Reset' | Optional. Content of reset button. |


## 事件

|  参数   |                                                                                    类型                                                                                     | 说明                                                | 跳转 Demo                                               |
| :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------- | ------------------------------------------------------- |
| formSubmit | `EventEmitter<{valid: boolean, directive: `[`DFormGroupRuleDirective`](https://devui.design/components/zh-cn/form/api#DFormGroupRuleDirective) `\| AbstractControlDirective}, errors: {[key: string]: ValidationErrors}>` | Optional. This event is responded to when the submit button binding element is used to trigger submission. |

### DFormData参数说明

```ts
export interface DFormData {
  [key: string]: DFormItem;    //key indicates the name of the form item, The value is unique. DFormItem is the template metadata for each form item
}
```

### DFormItem参数说明

```ts
export interface DFormItem {
  key: string;             //Unique ID     
  label: string;          //Form label name
  type: DWidgetType;      //Available encapsulation widgets. For the enumerated values, see DWidgetType.
  ui: DFormUI;            // Widget configuration after type is selected
  order?: number;        //Order of Displaying Form Items
  required?: boolean;    //Optional. Indicates whether the form item is mandatory.
  hasHelp?: boolean;       //Optional. Indicating whether a form item requires help.
  helpTips?: string;     //Optional. This parameter is used together with hasHelp.
  hasFeedback?: boolean;     //Optional. Sets whether to display the feedback icon for the current form control.
  feedbackStatus?: 'error' | 'pending' | 'success';  //Optional. Manually specify the current control status.
}
```

### DFormUI参数说明

```ts
export interface DFormUI {
  [key: string]: any;   //Depending on each widget. For details, please see `src/app/pages/form/dynamic-form/ui/xx/xx.interface.ts`
}
```

### DWidgetType参数说明

The following widgets are available:

```ts
export type DWidgetType = 'select' | 'radio' | 'checkbox' | 'tagsInput' | 'textInput' | 'textarea' | 'toggle' | 'tagsInput';

```
