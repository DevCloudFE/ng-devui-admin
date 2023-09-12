import { Directive, OnInit, OnDestroy, ElementRef, Renderer2, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { setScreenPointStyle } from './layout-utils';
import { DaScreenMediaQueryService } from './screen-media-query.service';

@Directive({
  selector: `[daStyle], [daStyleMs], [daStyleMm], [daStyleMl], [daStyleXs], [daStyleSm], [daStyleMd], [daStyleLg], [daStyleXl]`,
})

export class DaStyleDirective implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @Input() daStyle: Object;
  @Input() daStyleMs: Object;
  @Input() daStyleMm: Object;
  @Input() daStyleMl: Object;
  @Input() daStyleXs: Object;
  @Input() daStyleSm: Object;
  @Input() daStyleMd: Object;
  @Input() daStyleLg: Object;
  @Input() daStyleXl: Object;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private screenQueryService: DaScreenMediaQueryService
  ) { }

  ngOnInit(): void {
    this.screenQueryService.getPoint()
    .pipe(takeUntil(this.destroy$))
    .subscribe(({ currentPoint }) => {
      setScreenPointStyle(currentPoint, this, this.elementRef, this.renderer);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
