import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DynamicFormsService {
  getFormItems(list) {
    let formItems = [];
    Object.keys(list).forEach((item) => {
      formItems.push(list[item]);
    });
    return this.sortItems(formItems);
  }

  sortItems(formItems) {
    let noOrders = formItems.filter(item => item.order === undefined);
    let hasOrders = formItems.filter(item => item.order !== undefined).sort((a, b) => a.order - b.order);
    return hasOrders.concat(noOrders);
  }
}