# How to Use

The following information is added to the module:

```ts
import { DaGridModule } from 'src/app/@shared/layouts/da-grid'; // This module has been referenced and exported in shared.module.
```

Introduced in global stylesheet style.css:

```
@import 'ng-devui/devui-layout.css';  // Globally referenced
```

Used in the page:

```html
<!-- Horizontal layout. Flex layout is used for da-layout-row layout, and da-layout-col can be nested internally. -->
<da-layout-row [daGutter]="0">
  <div></div>
  <da-layout-col></da-layout-col>
</da-layout-row>

<!-- The flex layout is used for the vertical layout da-layout-col layout, and the da-layout-row can be nested internally. -->
<da-layout-col [daGutter]="0">
  <div></div>
  <da-layout-row></da-layout-row>
</da-layout-col>

<!-- Use the spacing horizontal layout. The default spacing is 12, which takes effect only for internal da-layout-col and da-col-items. -- >
<da-layout-row>
  <da-layout-col></da-layout-col>
  <da-col-item></da-col-item>
</da-layout-row>

<!-- Use the vertical layout with spacings. The default spacing is 12, which takes effect only for internal da-layout-row and da-row-items. -- >
<da-layout-col>
  <da-layout-row></da-layout-row>
  <da-row-item></da-row-item>
</da-layout-col>
```

## Layout Design and Implementation

### da-layout-row

- Horizontal layout container. Only `<da-layout-col> and <da-col>` can be placed internally.

### da-layout-col

- Vertical layout container. Only `<da-layout-row> and <da-row>` can be placed internally.

### da-row

- Rows of elements in portrait layout, content projection of inner elements.

### da-col

- Horizontal layout of the elements in the column, the content of the inner elements will be projected.

### Grid Implementation

- Column grid based on `devui-layout.css`, is a 24-column grid;
- Example:
```html
<da-layout-row>
  <da-col-item [daSpan]="12"></da-col-item> // The current two cols occupy 12 out of 24 grids each.
  <da-col-item [daSpan]="12"></da-col-item>
</da-layout-row>
```

###Responsive implementation

- Based on `devui-layout.css`, breakpoints are:
` ms: 360px, mm: 768px, ml: 1024px, xs: 1280px, sm: 1440px, md: 1600px, lg: 1760px, xl: 1920px`.
- Breakpoint usage example:
```html
<da-layout-row>
  <da-col-item [daXs]="12"></da-col-item> // When the page width is greater than or equal to xs (1280px), each of the two cols occupies 12 bars.
  <da-col-item [daXs]="12"></da-col-item>
</da-layout-row>
```
- Use `DaScreenMediaQueryService` to monitor the change of responsive breakpoints. Example: [`DaScreenMediaQueryService`](#dascreenmediaqueryservice).

### Elastic Box Implementation

- Implemented based on the native `css flex` layout. Responsive mode is supported. For details, see [`daFlex Parameter Description`](#_daflex-parameter-description_).

### Space Implementation

- Set the spacing between sub-elements in a unified manner, set the sub-element `margin-bottom` for vertical layout, and set the sub-element `margin-right` for horizontal layout. Array parameters and response expressions are supported.


### Spacing Gutter Implementation

- The container sets the element gutter in a unified manner, and sets the `padding` on the left and right sides of the element and `padding` on the upper and lower sides of the element to achieve visual separation. This method can be used to set the spacing for multiple lines of elements.
- Example:
```html
<da-layout-row [daGutter]="[12, 12]"> // The padding of the da-col-item element in the is 12/2 = 6px. If [daGutter] is set to 12, the padding of the da-col-item element is 6px.
  <da-col-item [daXs]="12"></da-col-item>
  <da-col-item [daXs]="12"></da-col-item>
</da-layout-row>
```

### styles

- Supports `styles` responsive rendering. For details, see [`daStyle Parameter Description`](#_dastyle-parameter-description_) 。

## Parameter

The following `{{point}}` represents a responsive optional breakpoint value: `Ms | Mn | Ml | Xs | Sm | Md | Lg | Xl`

| Parameter | Type | Default | Description | Supported Elements |
| :------------------: | :------------------: | :--: | :--------------------------------------------------------- | :----------------------------------------------------- |
| daSpace | `number \| number[]` | -- | indicates the spacing between sub-elements of the container. The unit is px. This parameter is valid only for internal layout elements. | da-layout-row, da-layout-col |
| daSpace{{point}} | `number \| number[]` | -- | indicates the spacing between sub-elements of the container at different breakpoints. The unit is `px` | da-layout-row, da-layout-col |
| daGutter | `number \| number[]` | -- | Optional. indicates the spacing between sub-elements of the container. The unit is `px`. This parameter is valid only for internal layout elements. It corresponds to left, right, and top, and bottom padding | da-layout-row, da-layout-col | 
| daGutter{{point}} | `number \| number[]` | -- | Optional. The unit is `px` | da-layout-row, da-layout-col |.)
| daFlex | `number \| string` | -- | Optional. Set the flex attribute of the element | da-layout-row, da-layout-col, da-row-item, da-col-item |
| daFlex{{point}} | `number \| string` | -- | Optional. Set the flex attribute of the element under different breakpoints. | da-layout-row, da-layout-col, da-row-item, da-col-item. |
| daJustify | [`DaJustify`](#dajustify) | -- | Optional. Sets the axes alignment mode of container subelements. | da-layout-row, da-layout-col |
| daJustify{{point}} | [`DaJustify`](#dajustify) | -- | Optional. Sets the main axis alignment mode of container subelements under different breakpoints. | da-layout-row, da-layout-col |
| daAlign | [`DaAlign`](#daalign) | -- | Optional. Sets the cross axis alignment mode of container sub-elements. | da-layout-row, da-layout-col |
| daAlign{{point}} | [`DaAlign`](#daalign) | -- | Optional. Set the cross axis alignment mode of container sub-elements under different breakpoints. | da-layout-row, da-layout-col |
| daAlignSelf | [`DaAlignSelf`](#daalignself) | -- | Optional. Sets the alignment mode of the element based on the cross axis of the parent element. | da-layout-row, da-layout-col, da-row-item, da-col-item |
| daAlignSelf{{point}} | [`DaAlignSelf`](#daalignself) | -- | Optional. Set the alignment mode of elements based on the cross axis of the parent element under different breakpoints. | da-layout-row, da-layout-col, da-row-item, da-col-item |
| daSpan | `[0-24]` | -- | Optional. It specifies the number of grid copies occupied by elements. If the value is 0, the grid copies are not displayed. | da-layout-col, da-col-item |
| da{{point}} | `[0-24] \| ` [`DaMergedProperty`](#damergedproperty) | -- | Optional. It specifies the number of grid copies occupied by elements under different breakpoints. If the value is 0, the grid copies are not displayed. | da-layout-col,da-col-item |
| daOffset | `[0-24]` | -- | Optional. Sets the number of grid copies occupied by the required spacing before an element. | da-layout-col, da-col-item |
| daOffset{{point}} | `[0-24]` | -- | Optional. Set the number of grids occupied by the required spacing before elements under different breakpoints. | da-layout-col, da-col-item |
| daOrder | `[0-24]` | -- | Optional. Set the current subelement order | da-row-item, da-col-item. |
| daOrder{{point}} | `[0-24]` | -- | Optional. Set the order | da-row-item, da-col-item elements
| daStyle | `CSSStyleObject` | -- | Optional. Set element style | All elements |
| daStyle{{point}} | `CSSStyleObject` | -- | Optional. Set element styles under different breakpoints | All elements |

#### _daFlex Parameter Description_

1. If the width is 300px`, set the current element width to 300px`, which is the same as that of the CSS flex attribute to 0 0 300px`.
2. If the value is 1, the scaling weight of the current element is 1, which is the same as that of the css flex attribute set to 1 1 auto.
3. If another character string is transferred, for example, `1 2 200px`, the current character string is directly used to set the css flex attribute of the current element.

#### _daStyle Parameter Description_

1. Receive the `css` style class for rendering.
2. Non-full coverage. Attributes of the same name are mutually exclusive. For example, if the breakpoint of the current screen width is md, the style that takes effect and renders to the element is `{"background": "#0f0", "color": "#fff"}`.

# Interface & Type Definition

### DaJustify
```TS
//The following correspond to flex-start, flex-end, center, space-between, and space-around of the css flex justify-content attribute.
type DaJustify = 'start' | 'end' | 'center' | 'around' | 'between';
```

### DaAlign
```TS
//The following correspond to flex-start, center, flex-end, baseline, and stretch of the css flex align-items attribute.
type DaAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
```

### DaAlignSelf
```TS
//The following correspond to flex-start, center, flex-end, baseline, and stretch of the css flex align-self attribute.
type DaAlignSelf = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
```

### DaBreakpoint
```TS
type DaBreakpoint = 'ms' | 'mm' | 'ml' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

### DaBreakpoints
```TS
const DaBreakpoints = ['ss', 'ms', 'mm', 'ml', 'xs', 'sm', 'md', 'lg', 'xl'];
```

### DaBreakpointsMap
```TS
const DaBreakpointsMap = {
  'ss': 0,
  'ms': 360,
  'mm': 768,
  'ml': 1024,
  'xs': 1280,
  'sm': 1440,
  'md': 1600,
  'lg': 1760,
  'xl': 1920
};
```

### DaMergedProperty
```TS
export type DaMergedProperty = {
  daSpan?: number,
  daOffset?: number,
  daAlign?: DaAlign,
  daJustify?: DaJustify,
  daAlignSelf?: DaAlignSelf,
  daOrder?: number,
}
```

### DaScreenMediaQueryService

#### Function

- Monitors changes in screen media attributes.

#### Injection Mode

- `providedIn: 'root'`

#### External Method

```TS
//Obtain the current breakpoint. This function can be subscribed to to return subject to monitor the change of the breakpoint. Change indicates the change trend of the breakpoint relative to the previous breakpoint, and compare indicates the change trend of the breakpoint relative to the basepoint.
public getPoint(): ReplaySubject<{currentPoint: DaBreakpoint, change: number, compare: {[key: string]: number}}>;
```

#### Example

```TS
import {DaScreenMediaQueryService} from'src/app/@shared/layouts/da-grid';
............
export class XXXComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
  private screenQueryService: DaScreenMediaQueryService
  ) {}

  ngOnInit(): void {
    this.screenQueryService.getPoint()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({currentPoint: DaBreakpoint, change: number, compare: {[key: string]: number}}) => {
      console.log(currentPoint, change, compare); // change indicates the change trend of the current breakpoint, and compare indicates the change trend of the breakpoint relative to the basePoint.
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```
