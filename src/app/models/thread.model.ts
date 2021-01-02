import { IProfilePicture } from "@app/interfaces/i-profile-picture.interface";
import { User } from "./user.model";

export class Thread implements IProfilePicture{
    threadId: number;
    insertDate: Date;
    topic: string;
    upvote: number;
    replyCount: number;
    user: User;
    discussionId: number;
    detail: string;
    pictureUrl: any;
}