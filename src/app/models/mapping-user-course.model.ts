import { Course } from './course.model';
import { User } from './user.model';

export class MappingUserCourse{
    courseId: number;
    userId: number;
    progress: number;
    user: User;
    course: Course;
}