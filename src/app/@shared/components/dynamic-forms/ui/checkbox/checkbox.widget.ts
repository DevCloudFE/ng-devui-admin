import { Component, Input, OnInit } from '@angular/core';
import { CheckboxUI } from './checkbox.interface';
import { ControlContainer, NgForm } from '@angular/forms';
@Component({
  selector: 'da-checkbox-widget',
  templateUrl: './checkbox.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class CheckboxWidget implements OnInit {
  @Input() ui: CheckboxUI;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
    
  }
}

