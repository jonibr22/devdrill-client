import { IProfilePicture } from '@app/interfaces/i-profile-picture.interface';
import { User } from './user.model';

export class Reply implements IProfilePicture{
    replyId: number;
    insertDate: Date;
    detail: string;
    user: User;
    upvote: number;
    threadId: number;
    topic: string;
    pictureUrl: any;
}