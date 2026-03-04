import { cn } from "@/utils/cn";

type ColumnProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
};

const Column = ({
  as: Component = "div",
  className,
  ...props
}: ColumnProps) => {
  return <Component className={cn("flex flex-col", className)} {...props} />;
};

export default Column;
