import { Component, Input, OnInit } from '@angular/core';
import { RadioUI } from './radio.interface';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'da-radio-widget',
  templateUrl: './radio.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class RadioWidget implements OnInit {
  @Input() ui: RadioUI;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
    
  }
}

