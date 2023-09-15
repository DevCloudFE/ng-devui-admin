import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-docs',
  template: `
    <!-- <div class="devui-content-layout doc"> -->
      <router-outlet></router-outlet>
    <!-- </div> -->
  `,
})
export class MaterialDocsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
