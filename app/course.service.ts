import {Injectable} from '@angular/core';

@Injectable();

export class CourseService{
    getCourse(): string[]{
        return  ["course1", "course2", "course3"];
    }
}
