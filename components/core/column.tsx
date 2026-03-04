type ColumnProps = React.ComponentProps<"div"> & {
  as?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
};

const Column = ({
  as: Component = "div",
  className,
  children,
  ref,
  ...props
}: ColumnProps) => {
  return (
    <Component ref={ref} className={`flex flex-col ${className}`} {...props}>
      {children}
    </Component>
  );
};

Column.displayName = "Column";

export default Column;
