import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiscussionGroup } from '@app/models/discussion-group.model';
import { Discussion } from '@app/models/discussion.model';
import { environment } from '@environments/environment';

@Injectable()
export class DiscussionService{
    constructor(private http : HttpClient){}
    getAll(){
        return this.http.get<DiscussionGroup[]>(`${environment.apiUrl}/forum/discussions`);
    }
    getById(id: number){
        return this.http.get<Discussion>(`${environment.apiUrl}/forum/discussions/${id}`);
    }
}