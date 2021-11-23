import {DateTime} from 'luxon';

export class GiosDateToDateTimeTransformer {
  private readonly parsedDate: DateTime;

  constructor(
    private readonly giosDate: string
  ) {
    this.parsedDate = this.parseDate();
  }

  public getParsedDate(): DateTime {
    return this.parsedDate;
  }

  private parseDate(): DateTime {
    const {giosDate} = this;
    const [date, time] = giosDate.split(' ');
    const [year, month, day] = date.split('-');
    const [hour, minutes, seconds] = time.split(':');
    return DateTime.utc(+year, +month, +day, +hour, +minutes, +seconds);
  }
}