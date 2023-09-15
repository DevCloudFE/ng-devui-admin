import { NgModule } from '@angular/core';
import {
  AvatarModule,
  CardModule,
  LoadingModule,
  TabsModule,
  TagsModule,
} from 'ng-devui';
import { UserCenterComponent } from './user-center.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [UserCenterComponent],
  imports: [
    TagsModule,
    LoadingModule,
    CardModule,
    AvatarModule,
    RouterModule,
    TabsModule,
    SharedModule
  ],
  exports: [UserCenterComponent],
  providers: [UserService],
})
export class UserCenterModule {}
