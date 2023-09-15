import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User, UserService } from './user.service';

@Component({
  selector: 'da-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
})
export class UserCenterComponent implements OnInit {
  user: User = {};

  busy: Subscription;

  spaceBusy: Subscription;

  activeTab: string | number = 'first';

  tabs = [
    {
      id: 'first',
      label: 'Articles'
    },
    {
      id: 'second',
      label: 'Project'
    }
  ]

  articles = [];

  projects = []

  workGroups = [];

  constructor(private userDataService: UserService) {}

  ngOnInit() {
    this.busy = this.userDataService.getUser().subscribe((res) => {
      this.user = res;
    });
    this.userDataService.getWorkGroups().subscribe((group) => {
      this.workGroups = group;
    });
    this.getListData();
  }

  getListData () {
    switch (this.activeTab) {
      case 'first':
        this.getArticles();
        return;
      case 'second':
        this.getProjects();
        return
    }
  }

  getArticles () {
    this.spaceBusy = this.userDataService.getArticles().subscribe(res => {
      this.articles = res;
    })
  }

  getProjects () {
    this.spaceBusy = this.userDataService.getProjects().subscribe(res => {
      this.projects = res;
    })
  }

  activeTabChange (e) {
    this.getListData();
  }

  actionHandler (key, item) {
    if (item[key + 'Attached']) {
      item[key] -= 1;
    } else {
      item[key] += 1;
    }
    item[key + 'Attached'] = !item[key + 'Attached'];
  }
}
