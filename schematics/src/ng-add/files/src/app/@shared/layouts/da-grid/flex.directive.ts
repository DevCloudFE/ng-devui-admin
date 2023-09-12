import { Directive, OnInit, OnDestroy, ElementRef, Renderer2, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { setScreenPointFlex } from './layout-utils';
import { DaScreenMediaQueryService } from './screen-media-query.service';

@Directive({
  selector: `[daFlex], [daFlexMs], [daFlexMm], [daFlexMl], [daFlexXs], [daFlexSm], [daFlexMd], [daFlexLg], [daFlexXl]`,
})

export class DaFlexDirective implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @Input() daFlex: number | string;
  @Input() daFlexMs: number | string;
  @Input() daFlexMn: number | string;
  @Input() daFlexMl: number | string;
  @Input() daFlexXs: number | string;
  @Input() daFlexSm: number | string;
  @Input() daFlexMd: number | string;
  @Input() daFlexLg: number | string;
  @Input() daFlexXl: number | string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private screenQueryService: DaScreenMediaQueryService
  ) { }

  ngOnInit(): void {
    this.screenQueryService.getPoint()
    .pipe(takeUntil(this.destroy$))
    .subscribe(( {currentPoint }) => {
      setScreenPointFlex(currentPoint, this, this.elementRef, this.renderer);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
