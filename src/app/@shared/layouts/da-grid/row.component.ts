import { Component, ChangeDetectionStrategy, HostBinding, Input, OnChanges, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { setGridClass } from './layout-utils';
import { DaAlignSelf } from './layout.types';

@Component({
  selector: 'da-row-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class RowComponent implements OnInit, OnChanges {
  @HostBinding('class.da-row') daRow = true;

  @Input() daOrder: number;
  @Input() daOrderMs: number;
  @Input() daOrderMn: number;
  @Input() daOrderMl: number;
  @Input() daOrderXs: number;
  @Input() daOrderSm: number;
  @Input() daOrderMd: number;
  @Input() daOrderLg: number;
  @Input() daOrderXl: number;

  @Input() daOffset: number;
  @Input() daOffsetMs: number;
  @Input() daOffsetMn: number;
  @Input() daOffsetMl: number;
  @Input() daOffsetXs: number;
  @Input() daOffsetSm: number;
  @Input() daOffsetMd: number;
  @Input() daOffsetLg: number;
  @Input() daOffsetXl: number;

  @Input() daAlignSelf: DaAlignSelf;
  @Input() daAlignSelfMs: DaAlignSelf;
  @Input() daAlignSelfMm: DaAlignSelf;
  @Input() daAlignSelfMl: DaAlignSelf;
  @Input() daAlignSelfXs: DaAlignSelf;
  @Input() daAlignSelfSm: DaAlignSelf;
  @Input() daAlignSelfMd: DaAlignSelf;
  @Input() daAlignSelfLg: DaAlignSelf;
  @Input() daAlignSelfXl: DaAlignSelf;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    setGridClass(this, this.elementRef, this.renderer);
  }

  ngOnChanges(): void {
    setGridClass(this, this.elementRef, this.renderer);
  }
}
