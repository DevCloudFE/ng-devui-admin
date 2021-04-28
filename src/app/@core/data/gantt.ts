import { Observable } from 'rxjs';

export interface GanttSource {
  id?: string;
  title?: string;
  ganttType?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  detail?: string;
  $checked?: boolean;
  $expandConfig?: any;
  children?: any;
  startDate?: Date;
  endDate?: Date;
  ganttBarPositionOffset?: number;
  ganttBarWidth?: number;
  status?: string;
  progressRate?: number;
  $isChildTableOpen?: boolean;
  progressDisabled?: boolean;
}

export abstract class GanttData {
  abstract getGantts(): Observable<GanttSource[]>;
  abstract getGanttYear(): number;
}
