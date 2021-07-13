import { Component, Input, OnInit } from '@angular/core';
import { TextAreaUI } from './textarea.interface';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'da-textarea-widget',
  templateUrl: './textarea.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class TextAreaWidget implements OnInit {
  @Input() ui: TextAreaUI;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
    
  }
}

