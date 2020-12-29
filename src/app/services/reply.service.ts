import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VoteType } from '@app/core/enums/vote.enum';
import { Reply } from '@app/models/reply.model';
import { environment } from '@environments/environment';

@Injectable()
export class ReplyService{
    constructor(private http : HttpClient){}
    getByThreadId(threadId: number){
        return this.http.get<Reply[]>(`${environment.apiUrl}/forum/threads/${threadId}/replies`);
    }
    vote(replyId: number, type: VoteType){
        return this.http.post<any>(`${environment.apiUrl}/forum/replies/vote`,{
            replyId: replyId,
            counter: (type === VoteType.Up ? 1 : -1)
        });
    }
    insert(reply: Reply, userId: number){
        return this.http.post<any>(`${environment.apiUrl}/forum/replies`,{
            replyDto: reply,
            userId: userId
        });
    }
    update(reply: Reply){
        return this.http.put<any>(`${environment.apiUrl}/forum/replies`,{
            replyId: reply.replyId,
            detail: reply.detail
        });
    }
    delete(replyId: number){
        return this.http.delete<any>(`${environment.apiUrl}/forum/replies/${replyId}`);
    }
}