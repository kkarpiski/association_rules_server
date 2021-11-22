import {DateTime} from 'luxon';

export const transformValueToDate = (date: string | Date | DateTime | undefined): DateTime | null => {
  if (typeof date === 'string') {
    return DateTime.fromISO(date).toUTC();
  } else if (date instanceof Date) {
    return DateTime.fromJSDate(date as Date).toUTC();
  } else if (date instanceof DateTime) {
    return date;
  }
  return null;
};
