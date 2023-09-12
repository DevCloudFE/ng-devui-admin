import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePreviewModule, NavSpriteModule } from 'ng-devui';
import { MaterialDocsComponent } from './material-docs.component';
import { AdminDocComponent } from './admin-doc/admin-doc.component';
import { MaterialDocsRoutingModule } from './material-docs-routing.module';
import { SafePipeModule } from 'ng-devui/utils';

@NgModule({
  declarations: [MaterialDocsComponent, AdminDocComponent],
  imports: [
    CommonModule,
    MaterialDocsRoutingModule,
    SafePipeModule,
    TranslateModule,
    ImagePreviewModule,
    NavSpriteModule,
  ],
})
export class MaterialDocsModule {}
