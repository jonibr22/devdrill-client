import { Course } from './course.model';
import { Lesson } from './lesson.model';

export class LessonGroup{
    lessonGroupId: number;
    lessonGroupName: string;
    courseId: number;
    course: Course;
    lessons: Array<Lesson>;
}