import { Component } from '@angular/core';
import {CourseService} from "./course.service";
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
           <li *ngFor='let course of courses'>
            {{course}}
           </li>
        </ul>
        `,
        directives: [AutoGrowDirective]
})

export class CoursesComponent{
    title: string = "Title for Courses Page";
    courses: string[];
    constructor(courseService: CourseService){
          this.courses = courseService.getCourse();
    }

}
