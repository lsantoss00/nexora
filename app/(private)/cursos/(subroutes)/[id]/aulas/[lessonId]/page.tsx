import Column from "@/components/core/column";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { mockCourses } from "../../../../data/mock-courses";
import {
  getLessonById,
  getModulesByCourseId,
} from "../../../../data/mock-modules";
import LessonHeader from "./components/lesson-header";
import LessonInfo from "./components/lesson-info";
import LessonModuleNav from "./components/lesson-module-nav";
import LessonVideoPlayer from "./components/lesson-video-player";

type PageProps = {
  params: Promise<{ id: string; lessonId: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id, lessonId } = await params;
  const result = getLessonById(id, lessonId);
  return { title: result?.lesson.title ?? "Aula" };
}

export default async function LessonPage({ params }: PageProps) {
  const { id, lessonId } = await params;

  const course = mockCourses.find((c) => c.id === id);
  if (!course) notFound();

  const result = getLessonById(id, lessonId);
  if (!result) notFound();

  const { lesson, module } = result;

  const modules = getModulesByCourseId(id);
  const allLessons = modules.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleId: m.id })),
  );
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);

  const prevLesson =
    currentIndex > 0
      ? {
          id: allLessons[currentIndex - 1].id,
          title: allLessons[currentIndex - 1].title,
        }
      : null;

  const nextLesson =
    currentIndex < allLessons.length - 1
      ? {
          id: allLessons[currentIndex + 1].id,
          title: allLessons[currentIndex + 1].title,
        }
      : null;

  return (
    <Column className="w-full gap-8 px-4 py-8 xl:px-8">
      <LessonHeader
        courseId={id}
        courseTitle={course.title}
        moduleTitle={module.title}
        lessonTitle={lesson.title}
      />

      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
        <Column className="lg:col-span-2 gap-8">
          <LessonVideoPlayer />
          <LessonInfo lesson={lesson} />
        </Column>

        <div className="lg:sticky lg:top-8 lg:self-start">
          <LessonModuleNav
            courseId={id}
            module={module}
            currentLessonId={lessonId}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </div>
      </div>
    </Column>
  );
}
