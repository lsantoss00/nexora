import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/core/breadcrumb";
import Link from "next/link";

type LessonHeaderProps = {
  courseId: string;
  courseTitle: string;
  moduleTitle: string;
  lessonTitle: string;
};

const LessonHeader = ({
  courseId,
  courseTitle,
  moduleTitle,
  lessonTitle,
}: LessonHeaderProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={`/cursos/${courseId}`}>{courseTitle}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <span>{moduleTitle}</span>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{lessonTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default LessonHeader;
