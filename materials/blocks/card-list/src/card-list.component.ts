import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListDataService } from './list-data.service';

@Component({
  selector: 'da-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  cardList = [];

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 12,
  };

  pageSizeOptions = [6, 12, 24];

  keyword = '';

  busy: Subscription;

  constructor(private listDataService: ListDataService) {}

  ngOnInit() {
    this.getList();
  }

  search() {
    this.getList();
  }

  getList() {
    this.busy = this.listDataService
      .getCardSource(this.pager)
      .subscribe((res) => {
        this.pager.total = res.total;
        this.cardList = res.pageList.filter((i) => {
          return i.name.toUpperCase().includes(this.keyword?.toUpperCase());
        });
      });
  }

  onPageChange(e) {
    this.pager.pageIndex = e;
    this.getList();
  }

  onSizeChange(e) {
    this.pager.pageSize = e;
    this.getList();
  }
}
