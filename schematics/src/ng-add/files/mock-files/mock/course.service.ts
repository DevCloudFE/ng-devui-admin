import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Course, CourseData } from '../data/course';

@Injectable()
export class CourseService extends CourseData {
  private courses: Course[] = [
    {
      title: 'DEVUI Course',
      owner: 'DevUI',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent commodo metus quis pellentesque molestie.`,
      likeCount: 12,
      starCount: 8,
      messageCount: 8,
    },
    {
      title: 'Setting Local Enviroment',
      owner: 'DevUI_Tang',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent commodo metus quis pellentesque molestie. `,
      likeCount: 20,
      starCount: 15,
      messageCount: 16,
    },
    {
      title: 'DevUI Tutorial',
      owner: 'DevUI_Peng',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent commodo metus quis pellentesque molestie. `,
      likeCount: 18,
      starCount: 10,
      messageCount: 10,
    },
    {
      title: 'DevUI Website',
      owner: 'DevUI_Zhang',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Praesent commodo metus quis pellentesque molestie. `,
      likeCount: 18,
      starCount: 10,
      messageCount: 10,
    },
  ];

  getCourses(): Observable<Course[]> {
    return observableOf(this.courses);
  }
}
