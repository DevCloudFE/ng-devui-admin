import { Component, ChangeDetectionStrategy, HostBinding, ElementRef } from '@angular/core';
import { Renderer2, Input, AfterViewInit, ViewEncapsulation, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { setGridClass, setScreenPointElementsSpaceAndGutter } from './layout-utils';
import { DaScreenMediaQueryService } from './screen-media-query.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DaAlign, DaAlignSelf, DaJustify } from './layout.types';
@Component({
  selector: 'da-layout-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      da-layout-row.da-layout-row {
        margin: 0;
        padding: 0;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})

export class LayoutRowComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @HostBinding('class.da-layout-row') daLayoutRow = true;
  @HostBinding('class.dl-row') dlRow = true;
  @HostBinding('class.dl-flex-row') dlFlexRow = true;

  /* 暂时使用方式为如12则为设置左右间距，为[12, 12]则为左右，上下间距 */
  @Input() daSpace: number | number[] = 0;
  @Input() daSpaceMs: number | number[];
  @Input() daSpaceMn: number | number[];
  @Input() daSpaceMl: number | number[];
  @Input() daSpaceXs: number | number[];
  @Input() daSpaceSm: number | number[];
  @Input() daSpaceMd: number | number[];
  @Input() daSpaceLg: number | number[];
  @Input() daSpaceXl: number | number[];

  @Input() daGutter: number | number[] = 0;
  @Input() daGutterMs: number | number[];
  @Input() daGutterMn: number | number[];
  @Input() daGutterMl: number | number[];
  @Input() daGutterXs: number | number[];
  @Input() daGutterSm: number | number[];
  @Input() daGutterMd: number | number[];
  @Input() daGutterLg: number | number[];
  @Input() daGutterXl: number | number[];

  @Input() daOffset: number;
  @Input() daOffsetMs: number;
  @Input() daOffsetMn: number;
  @Input() daOffsetMl: number;
  @Input() daOffsetXs: number;
  @Input() daOffsetSm: number;
  @Input() daOffsetMd: number;
  @Input() daOffsetLg: number;
  @Input() daOffsetXl: number;

  @Input() daAlign: DaAlign;
  @Input() daAlignMs: DaAlign;
  @Input() daAlignMn: DaAlign;
  @Input() daAlignMl: DaAlign;
  @Input() daAlignXs: DaAlign;
  @Input() daAlignSm: DaAlign;
  @Input() daAlignMd: DaAlign;
  @Input() daAlignLg: DaAlign;
  @Input() daAlignXl: DaAlign;

  @Input() daJustify: DaJustify;
  @Input() daJustifyMs: DaJustify;
  @Input() daJustifyMn: DaJustify;
  @Input() daJustifyMl: DaJustify;
  @Input() daJustifyXs: DaJustify;
  @Input() daJustifySm: DaJustify;
  @Input() daJustifyMd: DaJustify;
  @Input() daJustifyLg: DaJustify;
  @Input() daJustifyXl: DaJustify;

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
    private screenQueryService: DaScreenMediaQueryService
  ) { }

  ngOnInit(): void {
    setGridClass(this, this.elementRef, this.renderer);
  }

  ngOnChanges(): void {
    setGridClass(this, this.elementRef, this.renderer);
  }

  ngAfterViewInit(): void {
    this.screenQueryService.getPoint()
    .pipe(takeUntil(this.destroy$))
    .subscribe(({ currentPoint }) => {
      setScreenPointElementsSpaceAndGutter(this.getAllItems(), currentPoint, 'row', this, this.renderer);
    });
  }

  getAllItems(): HTMLElement[] {
    return (Array.from(this.elementRef.nativeElement.children) as []).filter((ele: HTMLElement) => {
      return ele.matches('da-col-item, da-layout-col');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
