import { Component, Input, OnInit } from '@angular/core';
import { TagsInputUI } from './tags-input.interface';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'da-tags-input-widget',
  templateUrl: './tags-input.widget.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm }]
})
export class TagsInputWidget implements OnInit {
  @Input() ui: TagsInputUI;
  @Input() name: string;

  _max: number = Number.MAX_SAFE_INTEGER;
  constructor() { }

  ngOnInit() {
    
  }
}

