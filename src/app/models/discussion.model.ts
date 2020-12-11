import { DiscussionGroup } from './discussion-group.model';
import { Thread } from './thread.model';

export class Discussion{
    discussionId: number;
    name: string;
    threads: Array<Thread>;
    discussionGroupId: number;
    discussionGroup: DiscussionGroup;
}