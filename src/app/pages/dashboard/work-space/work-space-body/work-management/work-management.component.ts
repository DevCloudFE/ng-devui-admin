import { Component, Input, OnInit } from '@angular/core';
import { ILabelDataConfigs } from 'ng-devui/quadrant-diagram';

@Component({
  selector: 'da-work-management',
  templateUrl: './work-management.component.html',
  styleUrls: ['./work-management.component.scss'],
})
export class WorkManagementComponent implements OnInit {
  labelData: Array<ILabelDataConfigs> = [];
  @Input() quadrantWidth: number;

  list = [
    {
      title: '工作1',
      content:
        '<p>First level target</p><p>Value 3</p><p>Urgency 3</p><p>Priority 3</p>',
      progress: 40,
    },
    {
      title: '工作2',
      content:
        '<p>Feature target</p><p>Value 3</p><p>Urgency 3</p><p>Priority 3</p>',
      progress: 30,
    },
    {
      title: '工作3',
      content:
        '<p>Secondary target</p><p>Value：3</p><p>Urgency 3</p><p>Priority 3</p>',
      progress: 20,
    },
    {
      title: '工作4',
      content:
        '<p>Three-level target</p><p>Value：3</p><p>Urgency 3</p><p>Priority 3</p>',
      progress: 10,
    },
    {
      title: '工作5',
      content:
        '<p>Three-level target</p><p>Value：3</p><p>Urgency 3</p><p>Priority 3</p>',
      progress: 80,
    },
    {
      title: '工作6',
      content:
        '<p>Three-level target</p><p>Value：3</p><p>Urgency 3</p><p>Priority 3</p>',
      progress: 70,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  dropEvent(item) {
    console.log(item);
    const droppedItem = this.list
      .map(function (e) {
        return e.title;
      })
      .indexOf(item.dragData.item.title);
    if (droppedItem !== -1) {
      this.list.splice(droppedItem, 1);
    }
    const label = {
      title: item.dragData.item.title,
      content: item.dragData.item.content,
      x: item.xAxisValue,
      y: item.yAxisValue,
      progress: item.dragData.item.progress,
    };
    const labelIndex = this.labelData
      .map(function (e) {
        return e.title;
      })
      .indexOf(label.title);
    if (labelIndex !== -1) {
      this.labelData.splice(labelIndex, 1);
    }
    this.labelData.push(label); // Place the dragged data on the quadrant graph to display
  }
}
