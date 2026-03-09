import Badge from "@/components/core/badge";
import Column from "@/components/core/column";
import Progress from "@/components/core/progress";
import Row from "@/components/core/row";
import { cn } from "@/utils/cn";
import { Clock, Play } from "lucide-react";

import type { CourseType } from "../data/mock-courses";

type CourseCardProps = {
  course: CourseType;
  className?: string;
};

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const CourseCard = ({ course, className }: CourseCardProps) => {
  const isInProgress = course.progress !== undefined && course.progress > 0;

  return (
    <Column
      className={cn(
        "overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div
        className={cn(
          "aspect-video w-full bg-gradient-to-br",
          course.thumbnailGradient,
        )}
      />

      <Column className="gap-3 p-4">
        <Row className="items-center gap-2">
          <Badge variant={course.category}>{course.category}</Badge>
          <Row className="items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" />
            <span>{formatDuration(course.durationInMinutes)}</span>
          </Row>
        </Row>

        <Column className="gap-1">
          <h3 className="line-clamp-1 font-semibold">{course.title}</h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {course.description}
          </p>
        </Column>

        <Row className="items-center justify-between">
          <Row className="items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
              {course.authorInitial}
            </div>
            <span className="text-sm text-muted-foreground">
              {course.authorName}
            </span>
          </Row>

          <Row className="items-center gap-1 text-sm font-medium text-primary cursor-pointer hover:text-primary/80 transition-colors">
            <span>{isInProgress ? "Continuar" : "Iniciar"}</span>
            <Play className="size-3 fill-current" />
          </Row>
        </Row>

        {isInProgress && (
          <Row className="items-center gap-2">
            <Progress value={course.progress} className="h-1.5 flex-1" />
            <span className="text-xs font-medium text-muted-foreground">
              {course.progress}%
            </span>
          </Row>
        )}
      </Column>
    </Column>
  );
};

export default CourseCard;
