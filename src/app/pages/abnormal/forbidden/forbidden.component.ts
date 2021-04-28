import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'da-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['../abnormal.component.scss']
})
export class ForbiddenComponent implements OnInit, OnDestroy {
  themeService;
  darkMode = '';
  isDark;

  constructor() { }

  ngOnInit(): void {
    this.themeService = window['devuiThemeService'];
    if (this.themeService) {
      this.themeChange();
    }
    if (this.themeService && this.themeService.eventBus) {
      this.themeService.eventBus.add('themeChanged', this.themeChange);
    }
  }

  getDarkModeStatus() {
    return this.themeService && this.themeService.currentTheme.isDark;
  }

  themeChange = () => {
    this.isDark = this.getDarkModeStatus();
    if (this.isDark) {
      this.darkMode = '-dark';
    } else {
      this.darkMode = '';
    }
  }

  ngOnDestroy() {
    if (this.themeService && this.themeService.eventBus) {
      this.themeService.eventBus.remove('themeChanged', this.themeChange);
    }
  }
}
