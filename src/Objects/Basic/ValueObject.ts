import { isDeepStrictEqual } from 'util';

export abstract class ValueObject<T>  {

  protected constructor(protected readonly value: T) {}

  public getValue(): T {
    return this.value;
  }

  public equals(valueObject: ValueObject<T>): boolean {
    return isDeepStrictEqual(this.getValue(), valueObject.getValue());
  }

  public isValueObject(): this is ValueObject<T> {
    return true;
  }
}
