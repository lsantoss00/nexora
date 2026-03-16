import Column from "@/components/core/column";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseSection from "../../components/course-section";
import { mockCourses } from "../../data/mock-courses";
import { getModulesByCourseId } from "../../data/mock-modules";
import CourseHero from "./components/course-hero";
import ModuleAccordion from "./components/module-accordion";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = mockCourses.find((c) => c.id === id);
  return { title: course?.title ?? "Curso" };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;
  const course = mockCourses.find((c) => c.id === id);

  if (!course) notFound();

  const modules = getModulesByCourseId(id);
  const totalLessons = modules.reduce(
    (sum, module) => sum + module.lessons.length,
    0,
  );

  return (
    <Column className="w-full gap-8 px-4 py-8 xl:px-8">
      <Column className="mx-auto w-full gap-10">
        <CourseHero course={course} totalLessons={totalLessons} />

        <CourseSection title="Sobre o curso">
          <p className="leading-relaxed text-muted-foreground">
            {course.description}
          </p>
        </CourseSection>

        <CourseSection title="Módulos do curso">
          <ModuleAccordion modules={modules} courseId={id} />
        </CourseSection>
      </Column>
    </Column>
  );
}
