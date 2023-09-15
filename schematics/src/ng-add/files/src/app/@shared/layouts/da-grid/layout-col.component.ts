import { Component, ChangeDetectionStrategy, HostBinding, Input, AfterViewInit } from '@angular/core';
import { ElementRef, Renderer2, OnInit, OnChanges, ViewEncapsulation, OnDestroy } from '@angular/core';
import { DaAlign, DaJustify, DaAlignSelf, DaMergedProperty } from './layout.types';
import { setGridClass, setScreenPointFlex, setScreenPointElementsSpaceAndGutter } from './layout-utils';
import { Subject } from 'rxjs';
import { DaScreenMediaQueryService } from './screen-media-query.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'da-layout-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      da-layout-col.da-layout-col {
        margin: 0;
        padding: 0;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class LayoutColComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @HostBinding('class.da-layout-col') daLayoutCol = true;
  @HostBinding('class.dl-d-flex') flex = true;
  @HostBinding('class.dl-flex-column') flexColumn = true;

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

  @Input() daSpan: number;
  @Input() daMs: number | DaMergedProperty;
  @Input() daMm: number | DaMergedProperty;
  @Input() daMl: number | DaMergedProperty;
  @Input() daXs: number | DaMergedProperty;
  @Input() daSm: number | DaMergedProperty;
  @Input() daMd: number | DaMergedProperty;
  @Input() daLg: number | DaMergedProperty;
  @Input() daXl: number | DaMergedProperty;

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
      setScreenPointElementsSpaceAndGutter(this.getAllItems(), currentPoint, 'col', this, this.renderer);
    });
  }

  getAllItems(): HTMLElement[] {
    return (Array.from(this.elementRef.nativeElement.children) as []).filter((ele: HTMLElement) => {
      return ele.matches('da-row-item, da-layout-row');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
