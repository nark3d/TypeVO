import { ValueObjectObject } from './ValueObjectObject';

export class DateTime extends ValueObjectObject<Date> {
  public constructor(date: Date) {
    super(date);
  }

  public static now(): DateTime {
    return new this(new Date());
  }

  public isWeekend(): boolean {
    return this.value.getDay() === 6 || this.value.getDay() === 0;
  }

}
