import { Track } from './track.model';
import { User } from './user.model';

export class MappingUserTrack{
    trackId: number;
    userId: number;
    progress: number;
    user: User;
    track: Track;
}