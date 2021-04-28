import { Observable } from 'rxjs';

export interface WorkItem {
  type?: string;
  description?: string;
  status?: string;
  time?: string;
  enviroment?: string;
}

export abstract class WorkItemData {
  abstract getHandlingWork(): Observable<WorkItem[]>;
  abstract getTracingWork(): Observable<WorkItem[]>;
  abstract getRiskWork(): Observable<WorkItem[]>;
}
