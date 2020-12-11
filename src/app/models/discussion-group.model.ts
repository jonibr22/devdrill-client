import { Discussion } from './discussion.model';

export class DiscussionGroup{
    discussionGroupId: number;
    name: string;
    photoUrl: string;
    discussions: Array<Discussion>;
}