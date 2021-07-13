import { Component, Input, OnInit } from '@angular/core';
import { ToggleUI } from './toggle.interface';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'da-toggle-widget',
  templateUrl: './toggle.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class ToggleWidget implements OnInit {
  @Input() ui: ToggleUI;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    
  }
}

