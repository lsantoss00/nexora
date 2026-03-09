import { cn } from "@/utils/cn";

type RowProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
};

const Row = ({ as: Component = "div", className, ...props }: RowProps) => {
  return <Component className={cn("flex flex-row", className)} {...props} />;
};

export default Row;
