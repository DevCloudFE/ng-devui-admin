import { Injectable, OnDestroy } from '@angular/core';
import { DaBreakpoint, DaBreakpoints, DaBreakpointsMap } from './layout.types';
import { fromEvent, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DaScreenMediaQueryService implements OnDestroy {
  private currentPoint: DaBreakpoint;
  private pointChangeSub: ReplaySubject<{ currentPoint: DaBreakpoint; change: number; compare: { [key: string]: number } }> =
    new ReplaySubject(1);
  private destroy$: Subject<void> = new Subject<void>();

  // 可以传入一个基准point，返回数据结构{ currentPoint, 变大or变小or没变，比基准point大or小or一样 }
  public getPoint(): ReplaySubject<{ currentPoint: DaBreakpoint; change: number; compare: { [key: string]: number } }> {
    if (!this.currentPoint) {
      this.currentPoint = this.getCurrentPoint()!;
      this.pointChangeSub.next({
        currentPoint: this.currentPoint,
        change: 0,
        compare: this.comparePoints(this.currentPoint),
      });

      fromEvent(window, 'resize')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          const tempPoint = this.getCurrentPoint()!;
          if (this.currentPoint !== tempPoint) {
            const change = this.comparePoints(tempPoint, this.currentPoint) as number;
            this.currentPoint = tempPoint;

            this.pointChangeSub.next({
              currentPoint: this.currentPoint,
              change: change,
              compare: this.comparePoints(tempPoint),
            });
          }
        });
    }

    return this.pointChangeSub;
  }

  // 无p2，则全量对比
  private comparePoints(p1: DaBreakpoint, p2?: DaBreakpoint) {
    let index1: any, index2: any;
    for (let i = 0; i < DaBreakpoints.length; i++) {
      if (p1 === DaBreakpoints[i]) {
        index1 = i;
      }
      if (p2 === DaBreakpoints[i]) {
        index2 = i;
      }
    }

    if (!p2) {
      let res: any = {};
      DaBreakpoints.forEach((point, index) => {
        res[point] = index1 - index;
      });

      return res;
    }

    return index1 - index2;
  }

  private getCurrentPoint(): DaBreakpoint | undefined {
    const currentScreenWidth = window.innerWidth;
    for (let i = 0; i < DaBreakpoints.length; i++) {
      if (DaBreakpointsMap[DaBreakpoints[i]] >= currentScreenWidth || i === DaBreakpoints.length - 1) {
        return DaBreakpoints[i] as DaBreakpoint;
      }
    }
    return;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
