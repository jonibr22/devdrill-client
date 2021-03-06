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
    update(thread: Thread){
        return this.http.put<any>(`${environment.apiUrl}/forum/threads`,{
            threadId: thread.threadId,
            topic: thread.topic,
            detail: thread.detail
        });
    }
    insert(thread: Thread,userId: number){
        return this.http.post<any>(`${environment.apiUrl}/forum/threads`,{
            userId: userId,
            threadDto: thread
        });       
    }
    vote(threadId: number, type: VoteType){
        return this.http.post<any>(`${environment.apiUrl}/forum/threads/vote`,{
            threadId: threadId,
            counter: (type === VoteType.Up ? 1 : -1)
        });
    }
}