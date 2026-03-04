import { format, isValid, parseISO } from "date-fns";

export function dateFormatter(dateAsString: string, showTime?: boolean) {
  if (!dateAsString) return undefined;

  const date = parseISO(dateAsString);
  if (!isValid(date)) return undefined;
  return showTime
    ? format(date, "dd/MM/yyyy 'às' HH:mm:ss")
    : format(date, "dd/MM/yyyy");
}
