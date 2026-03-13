import Column from "@/components/core/column";
import Row from "@/components/core/row";
import { CircleCheck, Clock } from "lucide-react";

import type { LessonType } from "../../../../../types/course-module-types";

type LessonInfoProps = {
  lesson: LessonType;
};

const LessonInfo = ({ lesson }: LessonInfoProps) => {
  return (
    <Column className="gap-3">
      <h1 className="text-xl font-bold md:text-2xl">{lesson.title}</h1>

      <Row className="flex-wrap items-center gap-4">
        <Row className="items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="size-3.5" />
          <span>{lesson.durationInMinutes}min</span>
        </Row>

        {lesson.completed && (
          <Row className="items-center gap-1.5 text-sm text-primary">
            <CircleCheck className="size-3.5" />
            <span>Concluída</span>
          </Row>
        )}
      </Row>

      <p className="leading-relaxed text-muted-foreground">
        {lesson.description}
      </p>
    </Column>
  );
};

export default LessonInfo;
