export type LessonType = {
  id: string;
  title: string;
  description: string;
  durationInMinutes: number;
  completed: boolean;
};

export type ModuleType = {
  id: string;
  courseId: string;
  title: string;
  lessons: LessonType[];
};
