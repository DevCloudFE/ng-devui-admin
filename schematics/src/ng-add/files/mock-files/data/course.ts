import { Observable } from 'rxjs';

export interface Course {
  title: string;
  owner: string;
  desc: string;
  likeCount: number;
  starCount: number;
  messageCount: number;
}

export abstract class CourseData {
  abstract getCourses(): Observable<Course[]>;
}
