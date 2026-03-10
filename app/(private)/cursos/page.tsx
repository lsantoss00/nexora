import Column from "@/components/core/column";
import { Metadata } from "next";
import Link from "next/link";

import CourseSection from "./components/course-section";
import CoursesInProgress from "./components/courses-in-progress";
import CoursesRecommended from "./components/courses-recommended";
import PageHeader from "./components/page-header";

export const metadata: Metadata = {
  title: "Cursos",
};

export default function CoursesPage() {
  return (
    <Column className="w-full max-w-6xl gap-10 px-6 py-8">
      <PageHeader />

      <CourseSection title="Continue o seu aprendizado">
        <CoursesInProgress />
      </CourseSection>

      <CourseSection
        title="Recomendados para você"
        action={
          <Link
            href="/cursos/todos"
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
