import Column from "@/components/core/column";
import Flex from "@/components/core/flex";
import Row from "@/components/core/row";
import { cn } from "@/utils/cn";
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleCheck,
  Clock,
} from "lucide-react";
import Link from "next/link";

import type { ModuleType } from "../../../../../types/course-module-types";

type LessonModuleNavProps = {
  courseId: string;
  module: ModuleType;
  currentLessonId: string;
  prevLesson: { id: string; title: string } | null;
  nextLesson: { id: string; title: string } | null;
};

const LessonModuleNav = ({
  courseId,
  module,
  currentLessonId,
  prevLesson,
  nextLesson,
}: LessonModuleNavProps) => {
  return (
    <Column className="gap-4">
      <Row className="items-center gap-3">
        <div className="h-6 w-1 rounded-full bg-primary" />
        <h2 className="text-lg font-semibold">{module.title}</h2>
      </Row>

      <Column className="overflow-hidden rounded-xl border bg-card">
        {module.lessons.map((lesson) => {
          const isCurrent = lesson.id === currentLessonId;

          return (
            <Link
              key={lesson.id}
              href={`/cursos/${courseId}/aulas/${lesson.id}`}
              className={cn(
                "flex items-center gap-3 border-b px-4 py-3 transition-colors last:border-b-0",
                isCurrent
                  ? "border-l-2 border-l-primary bg-primary/5"
                  : "hover:bg-muted/50",
              )}
            >
              {lesson.completed ? (
                <CircleCheck className="size-4 shrink-0 text-primary" />
              ) : (
                <Circle
                  className={cn(
                    "size-4 shrink-0",
                    isCurrent ? "text-primary" : "text-muted-foreground/50",
                  )}
                />
              )}
              <span
                className={cn(
                  "flex-1 text-sm",
                  isCurrent ? "font-medium" : "",
                  lesson.completed && !isCurrent && "text-muted-foreground",
                )}
              >
                {lesson.title}
              </span>
              <Row className="items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3" />
                <span>{lesson.durationInMinutes}min</span>
              </Row>
            </Link>
          );
        })}
      </Column>

      <Flex className="flex-col gap-2 sm:flex-row lg:flex-col 2xl:flex-row">
        {prevLesson ? (
          <Link
            href={`/cursos/${courseId}/aulas/${prevLesson.id}`}
            className="flex flex-1 items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-colors hover:bg-muted/50"
          >
            <ChevronLeft className="size-4 shrink-0" />
            <Column className="min-w-0 flex-1 gap-0.5">
              <span className="text-xs text-muted-foreground">
                Aula anterior
              </span>
              <span className="truncate font-medium">{prevLesson.title}</span>
            </Column>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextLesson ? (
          <Link
            href={`/cursos/${courseId}/aulas/${nextLesson.id}`}
            className="flex flex-1 items-center gap-2 rounded-lg border px-4 py-2.5 text-sm text-right transition-colors hover:bg-muted/50"
          >
            <Column className="min-w-0 flex-1 gap-0.5">
              <span className="text-xs text-muted-foreground">
                Próxima aula
              </span>
              <span className="truncate font-medium">{nextLesson.title}</span>
            </Column>
            <ChevronRight className="size-4 shrink-0" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </Flex>
    </Column>
  );
};

export default LessonModuleNav;
