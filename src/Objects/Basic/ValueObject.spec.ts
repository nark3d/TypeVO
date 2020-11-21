import test from 'ava';

import { ValueObject } from './ValueObject';

class ChildObject extends ValueObject<string> {
  constructor(string: string) {
    super(string);
  }
}

test('get', t => {
  t.is(new ChildObject('test').getValue(), 'test');
  t.not(new ChildObject('notTest').getValue(), 'test');
});

test('equals', t => {
  const equals = new ChildObject('test');
  t.true(equals.equals(new ChildObject('test')));
  t.false(equals.equals(new ChildObject('notTest')));
})

test('isValueObject', t => {
  t.true(new ChildObject('test').isValueObject());
})
