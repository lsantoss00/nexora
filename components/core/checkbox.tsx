"use client";

import { cn } from "@/utils/cn";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

const Checkbox = ({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) => {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-primary aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-5 shrink-0 border shadow-xs transition-shadow outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg cursor-pointer data-[state=checked]:bg-primary data-[state=checked]:text-white",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export default Checkbox;
