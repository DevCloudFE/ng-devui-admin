# 如何使用

在 module 中引入：

```ts
import { DynamicFormsModule } from 'src/app/@shared/components/dynamic-forms/dynamic-forms.module';
```

页面中使用：

```html
<da-dynamic-forms
  [formItems]="formItems"
  (formSubmit)="submitForms($event)"
>
</da-dynamic-forms>
```
使用可参考表单区块动态表单页示例`src/app/pages/form/dynamic-form`。

## 参数
|    参数    |     类型     | 默认 | 说明           |
| :--------: | :----------: | :--: | :------------- | --- |
| formItems | `DFormData` |  --  | 必选，模板数据 |     |
|   layout   | `'horizontal'\|'vertical'\|'columns'` | 'horizontal' | 可选，设置表单的排列方式  |
| labelSize  |         `'sm' \| '' \| 'lg'`          |      ''      | 可选，设置 label 的占宽，未设置默认为 100px，'sm'对应 80px，'lg'对应 150px |
| labelAlign |    `'start' \| 'center' \| 'end'`     |   'start'    | 可选，设置水平布局方式下，label 对齐方式  |
| formRules |  `DValidateRules`|  --    | 可选，配置你的校验规则 |
| formSubmitData |  `any`   |   --    | 可选，配置需要传递与 dSubmit 回调事件数据 |
|showSubmitBtn | `boolean` | true | 可选，是否显示表单提交按钮，单击该按钮触发表单submit |
| showLoading | `boolean` | false | 可选，若表单设置了异步校验，点击提交按钮后显示loading状态 |
|submitBtnContent| `string` | 'Submit' | 可选，表单提交按钮内容 |
|showResetBtn | `boolean` | true | 可选，是否显示表单重置按钮，单击该按钮触发表单reset |
|resetBtnContent| `string` | 'Reset' | 可选，表单重置按钮内容 |


## 事件

|  参数   |                                                                                    类型                                                                                     | 说明                                                | 跳转 Demo                                               |
| :-----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------- | ------------------------------------------------------- |
| formSubmit | `EventEmitter<{valid: boolean, directive: `[`DFormGroupRuleDirective`](https://devui.design/components/zh-cn/form/api#DFormGroupRuleDirective) `\| AbstractControlDirective}, errors: {[key: string]: ValidationErrors}>` | 可选，点击submit按钮触发提交时，响应事件 |

### DFormData参数说明

```ts
export interface DFormData {
  [key: string]: DFormItem;    // key为该表单项对应名称，值唯一； DFormItem为每个表单项模板元数据
}
```

### DFormItem参数说明

```ts
export interface DFormItem {
  key: string;             //唯一标识
  label: string;          //表单label名称
  type: DWidgetType;      //可使用的封装小部件，枚举值见DWidgetType
  ui: DFormUI;            // 选择type后对应的widget配置
  order?: number;        //表单项展示顺序
  required?: boolean;    //可选，表单项是否必填
  hasHelp?: boolean;       //可选，表单项是否需要帮助指引
  helpTips?: string;     //可选，表单项帮助指引提示内容，需配合hasHelp使用
  hasFeedback?: boolean;     //可选，设置当前 formControl 是否显示反馈图标
  feedbackStatus?: 'error' | 'pending' | 'success';  //可选，手动指定当前 control 状态反馈       
}
```

### DFormUI参数说明

```ts
export interface DFormUI {
  [key: string]: any;        //依据每个widget不同，详细请看`src/app/pages/form/dynamic-form/ui/xx/xx.interface.ts`
}
```

### DWidgetType参数说明
当前已提供以下widget

```ts
export type DWidgetType = 'select' | 'radio' | 'checkbox' | 'tagsInput' | 'textInput' | 'textarea' | 'toggle' | 'tagsInput';

```