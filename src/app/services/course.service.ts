import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@app/models/course.model';
import { environment } from '@environments/environment';

@Injectable()
export class CourseService{
    constructor(private http: HttpClient
        ) { }
    getAll(){
        return this.http.get<Course[]>(`${environment.apiUrl}/learning/courses`);
    }
    getById(id: number){
        return this.http.get<Course>(`${environment.apiUrl}/learning/courses/${id}`);
    }
    getByTrackId(id: number) {
        return this.http.get<Course[]>(`${environment.apiUrl}/learning/tracks/${id}/courses`);
    }
    getLatest(){
        return this.http.get<Course[]>(`${environment.apiUrl}/learning/latest-courses`);
    }
}