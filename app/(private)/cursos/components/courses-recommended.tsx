import { mockCourses } from "../data/mock-courses";
import CourseCard from "./course-card";

const recommendedCourses = mockCourses.slice(0, 3);

const CoursesRecommended = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recommendedCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesRecommended;
