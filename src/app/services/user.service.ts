import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/models/user.model';
import { Course } from '@app/models/course.model';
import { Track } from '@app/models/track.model';
import { Thread } from '@app/models/thread.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient
        ) { }

    setLessonAsDone(lessonId: number,userId: number) {
        return this.http.post<any>(`${environment.apiUrl}/user/progress`,{
            userId: userId,
            lessonId: lessonId
        });
    }

    getLessonCompletion(lessonId: number,userId: number){
        return this.http.get<boolean>(`${environment.apiUrl}/user/${userId}/progress/lessons/${lessonId}`);        
    }

    getCourseCompletion(courseId: number,userId: number){
        return this.http.get<number>(`${environment.apiUrl}/user/${userId}/progress/courses/${courseId}`);        
    }
    
    getTrackCompletion(trackId: number,userId: number){
        return this.http.get<number>(`${environment.apiUrl}/user/${userId}/progress/tracks/${trackId}`);        
    }

    getUserCoursesWithOrderByLastActive(userId){
        return this.http.get<Course[]>(`${environment.apiUrl}/user/${userId}/courses/desc-order-by-last-active`);
    }

    getUserTracksWithOrderByLastActive(userId){
        return this.http.get<Track[]>(`${environment.apiUrl}/user/${userId}/tracks/desc-order-by-last-active`);
    }

    getUserThreadsWithOrderByNewest(userId: number){
        return this.http.get<Thread[]>(`${environment.apiUrl}/user/${userId}/threads/desc-order-by-insert-date`);
    }
}