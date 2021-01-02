import { Instructor } from './instructor.model';
import { LessonGroup } from './lesson-group.model';
import { MappingUserCourse } from './mapping-user-course.model';
import { Track } from './track.model';
import { User } from './user.model';

export class Course{
    courseId: number;
    photoUrl: string;
    coverUrl: string;
    name: string;
    detail: string;
    insertDate: Date;
    lessonGroups: Array<LessonGroup>;
    trackId: number;
    track: Track;
    instructorId: number;
    user: User;
    mappingUserCourse: MappingUserCourse; 
    progress?: number;
    lastActive: Date;
}