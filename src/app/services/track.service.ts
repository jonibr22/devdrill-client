import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { TrackGroup } from '@app/models/track-group.model';
import { Track } from '@app/models/track.model';

@Injectable({ providedIn: 'root' })
export class TrackService {
    constructor(private http: HttpClient
        ) { }

    getAll() {
        return this.http.get<TrackGroup[]>(`${environment.apiUrl}/learning/tracks`);
    }
    getById(id: number){
        return this.http.get<Track>(`${environment.apiUrl}/learning/tracks/${id}`);
    }
}