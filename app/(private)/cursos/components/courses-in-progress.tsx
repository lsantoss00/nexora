import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/core/carousel";

import { mockCourses } from "../data/mock-courses";
import CourseCard from "./course-card";

const CoursesInProgress = () => {
  const coursesInProgress = mockCourses.filter(
    (course) => course.progress !== undefined && course.progress > 0,
  );

  const SHOW_ARROWS = coursesInProgress.length > 3;

  if (coursesInProgress.length === 0) return null;

  return (
    <Carousel opts={{ loop: true, align: "start" }}>
      <CarouselContent>
        {coursesInProgress.map((course) => (
          <CarouselItem key={course.id} className="md:basis-1/2 lg:basis-1/3">
            <CourseCard course={course} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {SHOW_ARROWS && (
        <div className="hidden xl:flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      )}
    </Carousel>
  );
};

export default CoursesInProgress;
