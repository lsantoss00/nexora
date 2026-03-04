import { toast as sonnerToast } from "sonner";

type ToastOptions = Parameters<typeof sonnerToast>[1];

const baseOptions = (className: string) => ({
  className,
});

export const toast = {
  success: (message: string, options?: ToastOptions) =>
    sonnerToast.success(message, {
      ...baseOptions("!bg-green-600 !text-white"),
      ...options,
    }),

  error: (message: string, options?: ToastOptions) =>
    sonnerToast.error(message, {
      ...baseOptions("!bg-red-600 !text-white"),
      ...options,
    }),

  info: (message: string, options?: ToastOptions) =>
    sonnerToast.info(message, {
      ...baseOptions("!bg-blue-600 !text-white"),
      ...options,
    }),

  warning: (message: string, options?: ToastOptions) =>
    sonnerToast.warning(message, {
      ...baseOptions("!bg-yellow-600 !text-white"),
      ...options,
    }),

  loading: (message: string, options?: ToastOptions) =>
    sonnerToast.loading(message, {
      ...baseOptions("!bg-zinc-600 !text-white"),
      ...options,
    }),
};
