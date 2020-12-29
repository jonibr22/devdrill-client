import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoteType } from '@app/core/enums/vote.enum';
import { Thread } from '@app/models/thread.model';
import { environment } from '@environments/environment';

@Injectable()
export class ThreadService{
    constructor(private http : HttpClient){}
    getById(id: number){
        return this.http.get<Thread>(`${environment.apiUrl}/forum/threads/${id}`);
    }
    getByDiscussionId(id: number){
        return this.http.get<Thread[]>(`${environment.apiUrl}/forum/discussions/${id}/threads`);
    }
    vote(threadId: number, type: VoteType){
        return this.http.post<any>(`${environment.apiUrl}/forum/threads/vote`,{
            threadId: threadId,
            counter: (type === VoteType.Up ? 1 : -1)
        });
    }
}