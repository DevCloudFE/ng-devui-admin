# 如何使用

在 module 中引入：

```ts
import { AdminFormModule } from "src/app/@shared/admin-form/admin-form.module";
```

页面中使用：

```html
<da-admin-form
  [formConfig]="formConfig"
  [formData]="formData"
  (submitted)="onSubmitted($event)"
  (canceled)="onCanceled($event)"
>
</da-admin-form>
```

## 参数

|    参数    |     类型     | 默认 | 说明           |
| :--------: | :----------: | :--: | :------------- | --- |
| formConfig | `FormConfig` |  --  | 必选，配置文件 |     |
|  formData  |      ``      |  --  | 必选，数据     |

### FormConfig 参数说明

```ts
export interface FormConfig {
  layout: "horizontal" | "vertical" | "columns";
  labelSize: "sm" | "" | "lg";
  items: any;
}
```
