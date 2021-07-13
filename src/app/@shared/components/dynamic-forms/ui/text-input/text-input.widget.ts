import { Component, Input, OnInit } from '@angular/core';
import { TextInputUI } from './text-input.interface';
import { ControlContainer, NgForm } from '@angular/forms';
@Component({
  selector: 'da-text-input-widget',
  templateUrl: './text-input.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class TextInputWidget implements OnInit {
  @Input() ui: TextInputUI;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
    
  }
}

