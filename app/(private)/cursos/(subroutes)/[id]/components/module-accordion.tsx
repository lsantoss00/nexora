"use client";

import Column from "@/components/core/column";
import Row from "@/components/core/row";
import { cn } from "@/utils/cn";
import { ChevronDown, Circle, CircleCheck, Clock } from "lucide-react";
import { useState } from "react";

import type { ModuleType } from "../../../types/course-module-types";

type ModuleAccordionProps = {
  modules: ModuleType[];
};

const formatDuration = (minutes: number) => {
  if (minutes < 60) return `${minutes}min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
};

const ModuleAccordion = ({ modules }: ModuleAccordionProps) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(modules.length > 0 ? [modules[0].id] : []),
  );

  const toggleModule = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <Column className="gap-3">
      {modules.map((module, index) => {
        const isExpanded = expandedIds.has(module.id);
        const completedCount = module.lessons.filter((l) => l.completed).length;
        const totalCount = module.lessons.length;
        const moduleDuration = module.lessons.reduce(
          (sum, l) => sum + l.durationInMinutes,
          0,
        );

        return (
          <Column
            key={module.id}
            className="overflow-hidden rounded-xl border bg-card"
          >
            <button
              type="button"
              onClick={() => toggleModule(module.id)}
              className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-muted/50"
            >
              <Row className="items-center gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <Column className="gap-0.5">
                  <span className="font-medium">{module.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {totalCount} {totalCount === 1 ? "aula" : "aulas"} ·{" "}
                    {formatDuration(moduleDuration)}
                    {completedCount > 0 &&
                      ` · ${completedCount}/${totalCount} concluídas`}
                  </span>
                </Column>
              </Row>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform",
                  isExpanded && "rotate-180",
                )}
              />
            </button>

            {isExpanded && (
              <Column className="border-t">
                {module.lessons.map((lesson) => (
                  <Row
                    key={lesson.id}
                    className="items-center gap-3 border-b px-4 py-3 last:border-b-0"
                  >
                    {lesson.completed ? (
                      <CircleCheck className="size-4 shrink-0 text-primary" />
                    ) : (
                      <Circle className="size-4 shrink-0 text-muted-foreground/50" />
                    )}
                    <span
                      className={cn(
                        "flex-1 text-sm",
                        lesson.completed && "text-muted-foreground",
                      )}
                    >
                      {lesson.title}
                    </span>
                    <Row className="items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="size-3" />
                      <span>{lesson.durationInMinutes}min</span>
                    </Row>
                  </Row>
                ))}
              </Column>
            )}
          </Column>
        );
      })}
    </Column>
  );
};

export default ModuleAccordion;
