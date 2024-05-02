import { parseISO, differenceInSeconds, format } from 'date-fns';

function formatRelative(dateISO: string): string {
  const date = parseISO(dateISO);
  const dayNow = new Date();

  const diffInSeconds = differenceInSeconds(dayNow, date); // difference entry of two dates

  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }

  const differenceInMinutes = Math.round(diffInSeconds / 60);
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} m`;
  }

  const differenceInHours = Math.round(differenceInMinutes / 60);
  if (differenceInHours < 24) {
    return `${differenceInHours} h`;
  }

  const differenceInDays = Math.round(differenceInHours / 24);
  if (differenceInDays < 7) {
    return `${differenceInDays} d`;
  }

  const differenceInWeeks = Math.round(differenceInDays / 7);
  if (differenceInWeeks < 4) return `${differenceInWeeks} sem`;

  const differenceInMonths = Math.round(differenceInWeeks / 30);
  differenceInMonths < 7 && `${differenceInMonths} m`;

  return format(date, 'dd/MM/yyyy');
}

export const dateUtils = {
  formatRelative,
};
