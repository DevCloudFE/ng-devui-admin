import { Component, ChangeDetectionStrategy, HostBinding, Input, Renderer2, ElementRef, OnInit, OnChanges } from '@angular/core';
import { setGridClass } from './layout-utils';
import { DaAlignSelf, DaMergedProperty } from './layout.types';

@Component({
  selector: 'da-col-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class ColComponent implements OnInit, OnChanges {

  @HostBinding('class.da-col') daCol = true;

  @Input() daSpan: number;
  @Input() daMs: number | DaMergedProperty;
  @Input() daMm: number | DaMergedProperty;
  @Input() daMl: number | DaMergedProperty;
  @Input() daXs: number | DaMergedProperty;
  @Input() daSm: number | DaMergedProperty;
  @Input() daMd: number | DaMergedProperty;
  @Input() daLg: number | DaMergedProperty;
  @Input() daXl: number | DaMergedProperty;

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
