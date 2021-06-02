import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { WorkGroup, WorkGroupData } from '../data/work-group';

@Injectable()
export class WorkGroupService extends WorkGroupData {
  private workGroups: WorkGroup[] = [
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'Cloud BU 某部门',
      description: 'XXX团队终于成立了！',
      manOfDepartment: 'XXX大佬',
      numberOfMembers: 999,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'DevUI XX部门',
      description: '成就自己成就他人。',
      manOfDepartment: 'Peng',
      numberOfMembers: 200,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: '周末吃喝玩乐组织',
      description: '周末约起来，想去哪就去哪。',
      manOfDepartment: 'Tang',
      numberOfMembers: 500,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: '可信交流社区',
      description: '可信与工程交流社区',
      manOfDepartment: 'Wang',
      numberOfMembers: 800,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: '羽毛球协会',
      description: '羽毛球爱好者集结地',
      manOfDepartment: 'Da Peng',
      numberOfMembers: 500,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'Angular项目组',
      description: '暂无描述',
      manOfDepartment: 'Da Peng',
      numberOfMembers: 500,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'React项目组',
      description: '暂无描述',
      manOfDepartment: 'Da Peng',
      numberOfMembers: 500,
    },
    {
      logoSrc: 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg',
      departmentTitle: 'Vue项目组',
      description: '暂无描述',
      manOfDepartment: 'Da Peng',
      numberOfMembers: 500,
    },
  ];

  getWorkGroups(): Observable<WorkGroup[]> {
    return observableOf(this.workGroups);
  }
}
