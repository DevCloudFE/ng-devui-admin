import { NgModule } from '@angular/core';
import {
  AvatarModule,
  CardModule,
  LoadingModule,
  PaginationModule,
} from 'ng-devui';
import { ListDataService } from './list-data.service';
import { CardListComponent } from './card-list.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    SharedModule,
    LoadingModule,
    CardModule,
    AvatarModule,
    PaginationModule
  ],
  exports: [CardListComponent],
  providers: [ListDataService],
})
export class CardListModule {}
