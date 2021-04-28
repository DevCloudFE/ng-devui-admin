import { Observable } from 'rxjs';

export interface WorkGroup {
  logoSrc: string;
  departmentTitle: string;
  description: string;
  manOfDepartment: string;
  numberOfMembers: number;
}

export abstract class WorkGroupData {
  abstract getWorkGroups(): Observable<WorkGroup[]>;
}
