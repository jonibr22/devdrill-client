import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LessonGroup } from '@app/models/lesson-group.model';
import { environment } from '@environments/environment';

@Injectable()
export class LessonGroupService{
    constructor(private http : HttpClient){}
    getByCourseId(id: number){
        return this.http.get<LessonGroup[]>(`${environment.apiUrl}/learning/courses/${id}/lesson-groups`);
    }

}