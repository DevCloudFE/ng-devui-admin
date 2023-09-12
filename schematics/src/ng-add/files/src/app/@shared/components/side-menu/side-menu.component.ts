import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'da-side-menu',
  templateUrl: './side-draw.component.html',
  styleUrls: ['./side-draw.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
