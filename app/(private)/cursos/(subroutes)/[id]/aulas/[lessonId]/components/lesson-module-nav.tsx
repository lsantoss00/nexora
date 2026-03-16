import Column from "@/components/core/column";
import Row from "@/components/core/row";
import { cn } from "@/utils/cn";
import {
  Circle,
  CircleCheck,
  Clock,
} from "lucide-react";
import Link from "next/link";

import type { ModuleType } from "../../../../../types/course-module-types";

type LessonModuleNavProps = {
  courseId: string;
  modules: ModuleType[];
  currentLessonId: string;
};

const LessonModuleNav = ({
  courseId,
  modules,
  currentLessonId,
}: LessonModuleNavProps) => {
  return (
    <Column className="gap-4">
      <Column className="max-h-[calc(100vh-6rem)] gap-4 overflow-y-auto pr-1">
        {modules.map((module) => (
          <Column key={module.id}>
            <Row className="items-center gap-3 px-1 pb-2">
              <div className="h-5 w-1 rounded-full bg-primary" />
              <h2 className="text-sm font-semibold">{module.title}</h2>
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
                          isCurrent
                            ? "text-primary"
                            : "text-muted-foreground/50",
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "flex-1 text-sm",
                        isCurrent ? "font-medium" : "",
                        lesson.completed &&
                          !isCurrent &&
                          "text-muted-foreground",
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
          </Column>
        ))}
      </Column>

    </Column>
  );
};

export default LessonModuleNav;
