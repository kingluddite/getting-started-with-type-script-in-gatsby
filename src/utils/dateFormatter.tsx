import { ReactNode } from 'react';

export function dateFormatter(date: Date): ReactNode {
  const options: Intl.DateTimeFormatOptions = {
    year: `numeric`,
    month: `long`,
    day: `numeric`,
  };

  return date.toLocaleDateString(`en-US`, options);
}
