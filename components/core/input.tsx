"use client";

import Button from "@/components/core/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/utils/cn";
import { Eye, EyeOff, Search } from "lucide-react";
import { useRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isSearchInput?: boolean;
}

const Input = ({
  className,
  type,
  error,
  isSearchInput,
  ref,
  ...props
}: InputProps & { ref?: React.Ref<HTMLInputElement> }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isPasswordInput = type === "password";
  const inputType = isPasswordInput && showPassword ? "text" : type;

  const handleFocus = () => {
    setIsFocused(true);
    const input = inputRef.current;
    if (!input) return;

    if (isMobile)
      return setTimeout(() => {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
  };

  return (
    <div className="relative w-full">
      {isSearchInput && (
        <Search
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors pointer-events-none",
            isFocused ? "text-primary" : "text-border",
          )}
        />
      )}
      <input
        ref={ref ?? inputRef}
        type={inputType}
        onFocus={handleFocus}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground border w-full min-w-0 rounded-lg bg-transparent px-3 py-1 text-base! shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-1",
          "aria-invalid:ring-destructive/20 aria-invalid:border-destructive h-10 bg-card",
          error && "border-destructive",
          isPasswordInput && "pr-10",
          isSearchInput && "pl-10",
          className,
        )}
        aria-invalid={!!error}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {isPasswordInput && (
        <Button
          type="button"
          variant="link"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none transition-colors pr-0!"
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </Button>
      )}
    </div>
  );
};

export default Input;
