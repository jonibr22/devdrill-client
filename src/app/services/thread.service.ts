import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from '@app/models/thread.model';
import { environment } from '@environments/environment';

@Injectable()
export class ThreadService{
    constructor(private http : HttpClient){}
    getByDiscussionId(id: number){
        return this.http.get<Thread[]>(`${environment.apiUrl}/forum/discussions/${id}/threads`);
    }
}