import Column from "@/components/core/column";
import Row from "@/components/core/row";

type CourseSectionProps = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

const CourseSection = ({ title, action, children }: CourseSectionProps) => {
  return (
    <Column as="section" className="gap-4">
      <Row className="items-center justify-between max-sm:block">
        <Row className="items-center gap-3">
          <div className="h-6 w-1 rounded-full bg-primary" />
          <h2 className="text-lg font-semibold">{title}</h2>
        </Row>
        {action}
      </Row>
      {children}
    </Column>
  );
};

export default CourseSection;
