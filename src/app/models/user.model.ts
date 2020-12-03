import { Instructor } from './instructor.model';
import { MappingUserCourse } from './mapping-user-course.model';
import { MappingUserTrack } from './mapping-user-track.model';
import { Reply } from './reply.model';
import { Thread } from './thread.model';

export class User{
    userId: number;
    password: string;
    name: string;
    photoUrl: string;
    email: string;
    phoneNumber: string;
    isInstructor: boolean;
    instructor: Instructor;
    threads: Array<Thread>;
    replies: Array<Reply>;
    mappingUserCourse: MappingUserCourse;
    mappingUserTrack: MappingUserTrack;    
}