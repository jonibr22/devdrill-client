import { Track } from './track.model';

export class TrackGroup{
    trackGroupId: number;
    trackGroupName: string;
    tracks: Array<Track>;
}