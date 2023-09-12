import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import * as echarts from 'echarts';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DEVUI_ECHART_THEME } from './echarts.theme';

@Component({
  selector: 'd-echarts',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'echarts',
  preserveWhitespaces: false,
})
export class EchartsComponent
  implements AfterViewInit, OnChanges, OnDestroy, OnInit
{
  echart: any;
  @Input() options: any;
  @Input() notMerge: boolean;
  @Input() lazyUpdate: boolean;
  /**
   * echarts 主题
   */
  @Input() theme: string | Object;
  /**
   * 当echarts初始化完成后，会返回echarts实例
   */
  @Output() chartReady: EventEmitter<any> = new EventEmitter<any>();
  @Input() width = '100%';
  @Input() height = '400px';
  @Input() autoResize = true;
  @HostBinding('style.display') display = 'inline-block';
  @HostBinding('style.width') get hostWidth() {
    return this.width;
  }
  @HostBinding('style.height') get hostHeight() {
    return this.height;
  }
  resizeSub: any;
  constructor(private elementRef: ElementRef) {}

  darkTheme = DEVUI_ECHART_THEME.defaultDarkTheme;

  lightTheme = DEVUI_ECHART_THEME.defaultLightTheme;

  themeService;

  ngOnInit() {
    this.themeService = window['devuiThemeService'];
  }

  ngAfterViewInit(): void {
    if (!this.theme && this.themeService && this.themeService.eventBus) {
      this.themeService.eventBus.add('themeChanged', this.themeChange);
    }
    this.initTheme();
    this.echart = (<any>echarts).init(
      this.elementRef.nativeElement,
      this.theme
    );
    this.updateChartData(this.options);
    this.chartReady.emit(this.echart);
    // 根据浏览器大小变化自动调整echarts
    if (this.autoResize) {
      this.resizeSub = fromEvent(window, 'resize')
        .pipe(debounceTime(100))
        .subscribe(() => {
          this.echart.resize();
        });
    }
  }

  initTheme() {
    if (this.themeService) {
      this.themeChange();
    } else {
      this.theme = this.theme || this.lightTheme;
    }
  }

  themeChange = () => {
    this.theme = this.themeService.currentTheme.isDark
      ? this.darkTheme
      : this.lightTheme;
    if (this.echart) {
      this.echart.dispose();
      this.echart = (<any>echarts).init(
        this.elementRef.nativeElement,
        this.theme
      );
      this.updateChartData(this.options);
      this.chartReady.emit(this.echart);
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    if (this.echart && changes['options']) {
      const currentValue = changes['options'].currentValue;
      this.updateChartData(currentValue);
    }
  }

  ngOnDestroy(): void {
    if (this.echart) {
      this.echart.clear();
      this.echart.dispose();
    }

    if (this.themeService && this.themeService.eventBus) {
      this.themeService.eventBus.remove('themeChanged', this.themeChange);
    }

    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }

  updateChartData(options: any) {
    if (options) {
      this.echart.setOption(
        options,
        this.notMerge || false,
        this.lazyUpdate || false
      );
    }
  }
}
