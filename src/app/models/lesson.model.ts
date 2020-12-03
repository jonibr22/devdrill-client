import { LessonGroup } from './lesson-group.model';

export class Lesson{
    lessonId: number;
    name: string;
    detail: string;
    startDateTime: Date;
    endDateTime: Date;
    videoUrl: string;
    thumbnailUrl: string;
    lessonGroupId: number;
    lessonGroup: LessonGroup;
}