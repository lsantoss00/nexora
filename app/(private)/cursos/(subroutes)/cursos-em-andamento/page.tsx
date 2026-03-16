import Column from "@/components/core/column";
import { Metadata } from "next";

import CourseCard from "@/app/(private)/cursos/components/course-card";
import { mockCourses } from "@/app/(private)/cursos/data/mock-courses";
import PageHeader from "@/components/page-header";

export const metadata: Metadata = {
  title: "Cursos em Andamento",
};

const coursesInProgress = mockCourses.filter(
  (course) => course.progress !== undefined && course.progress > 0,
);

export default function CoursesInProgressPage() {
  return (
    <Column className="w-full gap-8 px-4 xl:px-8 py-8">
      <PageHeader
        title="Cursos em Andamento"
        subtitle="Continue seu aprendizado e acompanhe o progresso dos seus cursos em andamento."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {coursesInProgress.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Column>
  );
}
