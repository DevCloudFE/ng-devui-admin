import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import { MaterialsRoutingModule } from './materials-routing.module';
import { DevuiCommonsModule } from 'devui-commons/src/devui-commons.module';
import { SafePipeModule } from 'ng-devui/utils';
import { AvatarModule, TabsModule, TagsModule } from 'ng-devui';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    DevuiCommonsModule,
    SafePipeModule,
    TranslateModule,
    TabsModule,
    TagsModule,
    AvatarModule
  ],
})
export class MaterialsModule {}
