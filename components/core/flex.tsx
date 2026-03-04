import React from "react";

type FlexProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
};

const Flex = ({
  as: Component = "div",
  className,
  children,
  ref,
  ...props
}: FlexProps) => {
  return (
    <Component ref={ref} className={`flex ${className}`} {...props}>
      {children}
    </Component>
  );
};

Flex.displayName = "Flex";

export default Flex;
