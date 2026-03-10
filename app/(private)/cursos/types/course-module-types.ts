export type LessonType = {
  id: string;
  title: string;
  durationInMinutes: number;
  completed: boolean;
};

export type ModuleType = {
  id: string;
  courseId: string;
  title: string;
  lessons: LessonType[];
};
