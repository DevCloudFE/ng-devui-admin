import { Component, Input, OnInit } from '@angular/core';
import { SelectUI } from './select.interface';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'da-select-widget',
  templateUrl: './select.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class SelectWidget implements OnInit {
  @Input() ui: SelectUI;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
    
  }
}

