"use client";

import CourseCard from "@/app/(private)/cursos/components/course-card";
import { mockCourses } from "@/app/(private)/cursos/data/mock-courses";
import { Loader2Icon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const BATCH_SIZE = 8;

const AllCoursesGrid = () => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < mockCourses.length;

  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + BATCH_SIZE, mockCourses.length),
      );
      setIsLoading(false);
    }, 800);
  }, [isLoading, hasMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  const visibleCourses = mockCourses.slice(0, visibleCount);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {visibleCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {hasMore && (
        <div
          ref={sentinelRef}
          className="flex items-center justify-center py-8"
        >
          {isLoading && (
            <Loader2Icon className="size-6 animate-spin text-primary" />
          )}
        </div>
      )}
    </>
  );
};

export default AllCoursesGrid;
