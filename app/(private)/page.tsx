import Column from "@/components/core/column";
import { Metadata } from "next";
import Link from "next/link";

import CourseSection from "@/app/(private)/cursos/components/course-section";
import CoursesInProgress from "@/app/(private)/cursos/components/courses-in-progress";
import CoursesRecommended from "@/app/(private)/cursos/components/courses-recommended";
import WelcomeSection from "@/app/(private)/cursos/components/welcome-section";
import { mockCourses } from "@/app/(private)/cursos/data/mock-courses";

export const metadata: Metadata = {
  title: "Início",
};

export default function PrivatePage() {
  const inProgressCount = mockCourses.filter(
    (course) => course.progress !== undefined && course.progress > 0,
  ).length;

  return (
    <Column className="w-full gap-10 px-4 xl:px-8 py-8">
      <WelcomeSection inProgressCount={inProgressCount} />

      <CourseSection
        title="Continue o seu aprendizado"
        action={
          inProgressCount > 4 && (
            <Link
              href="/cursos/cursos-em-andamento"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors w-fit"
            >
              Ver todos
            </Link>
          )
        }
      >
        <CoursesInProgress />
      </CourseSection>

      <CourseSection
        title="Recomendados para você"
        action={
          <Link
            href="/cursos/todos-os-cursos"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors w-fit"
          >
            Ver todos
          </Link>
        }
      >
        <CoursesRecommended />
      </CourseSection>
    </Column>
  );
}
