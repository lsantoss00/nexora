type RowProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
};

const Row = ({
  as: Component = "div",
  className,
  children,
  ref,
  ...props
}: RowProps) => {
  return (
    <Component ref={ref} className={`flex flex-row ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Row;
