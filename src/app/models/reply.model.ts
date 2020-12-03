import { User } from './user.model';

export class Reply{
    replyId: number;
    insertDate: Date;
    detail: string;
    user: User;
    upvote: number;
    threadId: number;
    topic: string;
}