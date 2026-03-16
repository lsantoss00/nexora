"use client";

import { cn } from "@/utils/cn";
import { IMaskInput } from "react-imask";

interface MaskedInputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "min" | "max"
> {
  mask: string | Array<{ mask: string }>;
  value: string;
  onAccept?: (value: string) => void;
  unmask?: boolean;
  error?: string;
}

const MaskedInput = ({
  mask,
  value,
  onAccept,
  className,
  unmask = true,
  error,
  ...props
}: MaskedInputProps) => {
  return (
    <IMaskInput
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mask={mask as any}
      value={value}
      unmask={unmask}
      onAccept={onAccept}
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground border w-full min-w-0 rounded-lg bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-1",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive h-12 bg-card",
        error && "border-destructive",
        className,
      )}
      {...props}
    />
  );
};

export default MaskedInput;
