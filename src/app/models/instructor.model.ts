import { Course } from './course.model';

export class Instructor{
    userId: number;
    instructorId: number;
    title: string;
    companyName: string;
    courses: Array<Course>;
    name: string;
}