"use client";

import Badge from "@/components/core/badge";
import Column from "@/components/core/column";
import Progress from "@/components/core/progress";
import Row from "@/components/core/row";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { CourseType } from "../../../data/mock-courses";

type CourseHeroProps = {
  course: CourseType;
  totalLessons: number;
};

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const CourseHero = ({ course, totalLessons }: CourseHeroProps) => {
  const [imgError, setImgError] = useState(false);
  const isInProgress = course.progress !== undefined && course.progress > 0;

  return (
    <Column className="gap-6">
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        {course.thumbnailUrl && !imgError ? (
          <>
            <Image
              src={course.thumbnailUrl}
              alt={course.title}
              fill
              sizes="100vw"
              className="object-cover"
              onError={() => setImgError(true)}
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-zinc-800" />
        )}
      </div>

      <Column className="gap-4">
        <Row className="flex-wrap items-center gap-3">
          <Badge variant={course.category}>{course.category}</Badge>
          <Row className="items-center gap-1 text-sm text-muted-foreground">
            <Clock className="size-3.5" />
            <span>{formatDuration(course.durationInMinutes)}</span>
          </Row>
          <Row className="items-center gap-1 text-sm text-muted-foreground">
            <BookOpen className="size-3.5" />
            <span>
              {totalLessons} {totalLessons === 1 ? "aula" : "aulas"}
            </span>
          </Row>
        </Row>

        <h1 className="text-2xl font-bold md:text-3xl">{course.title}</h1>

        <Row className="items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
            {course.authorInitial}
          </div>
          <Column>
            <span className="text-sm font-medium">{course.authorName}</span>
            <span className="text-xs text-muted-foreground">Instrutor</span>
          </Column>
        </Row>

        {isInProgress && (
          <Column className="gap-2">
            <Row className="items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Seu progresso
              </span>
              <span className="text-sm font-medium">{course.progress}%</span>
            </Row>
            <Progress value={course.progress} className="h-2" />
          </Column>
        )}
      </Column>
    </Column>
  );
};

export default CourseHero;
