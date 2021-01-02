import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '@app/models/lesson.model';
import { environment } from '@environments/environment';

@Injectable()
export class LessonService{
    constructor(private http : HttpClient){}
    getById(id: number){
        return this.http.get<Lesson>(`${environment.apiUrl}/learning/lessons/${id}`);
    }

}