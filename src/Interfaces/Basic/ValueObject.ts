export interface ValueObject<T> {
  isValueObject(): this is ValueObject<T>;
  get(): T;
  equals(valueObject: ValueObject<T>): boolean;
}
