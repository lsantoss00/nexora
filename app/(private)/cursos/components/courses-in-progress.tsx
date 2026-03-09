import { mockCourses } from "../data/mock-courses";
import CourseCard from "./course-card";

const coursesInProgress = mockCourses.filter(
  (course) => course.progress !== undefined && course.progress > 0,
);

const CoursesInProgress = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {coursesInProgress.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesInProgress;
