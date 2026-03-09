import { cn } from "@/utils/cn";

type FlexProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
};

const Flex = ({ as: Component = "div", className, ...props }: FlexProps) => {
  return <Component className={cn("flex", className)} {...props} />;
};

export default Flex;
