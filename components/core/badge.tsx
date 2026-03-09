import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary/15 text-primary",
        tecnologia: "bg-primary/15 text-primary",
        design: "bg-primary/15 text-primary",
        negocios: "bg-primary/15 text-primary",
        marketing: "bg-primary/15 text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Badge = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) => {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
};

export default Badge;
