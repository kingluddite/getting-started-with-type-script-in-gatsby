import { ReactNode } from 'react';

export function dateFormatter(date: Date): ReactNode {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return null; // or return a default value/error message
  }
  const options: Intl.DateTimeFormatOptions = {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  };

  return date.toLocaleDateString(`en-US`, options);
}
