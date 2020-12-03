import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '@app/models/course.model';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class CourseService{
    constructor(private http: HttpClient
        ) { }

    getByTrackId(id: number) {
        return this.http.get<Course[]>(`${environment.apiUrl}/learning/tracks/${id}/courses`);
    }
}