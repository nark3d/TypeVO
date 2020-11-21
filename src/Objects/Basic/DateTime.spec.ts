import test, { after } from 'ava';
import sinon from 'sinon';

import { DateTime } from './DateTime';

const someDateTime = new Date(2020, 0, 1, 0, 0);
const mockDate = sinon.useFakeTimers({ now: someDateTime });

test('now', t => {
  const dateTime = DateTime.now();
  t.deepEqual(someDateTime, dateTime.getValue());
  t.notDeepEqual(
    new Date(2019, 0, 1, 0, 0),
    dateTime.getValue()
  );
  // @todo work out the equals shit
  t.true(dateTime.equals(new DateTime(new Date(someDateTime))));
});

test('isWeekend', t => {
  t.truthy(new DateTime(new Date(2020, 10, 21)).isWeekend());
  t.truthy(new DateTime(new Date(2020, 10, 22)).isWeekend());
  t.falsy(new DateTime(new Date(2020, 10, 20)).isWeekend());
})

after(() => {
  mockDate.restore();
})
