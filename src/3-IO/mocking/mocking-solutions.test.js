import {logHello} from './mocking';

test('logHello', function() {
  const spy = jest.spyOn(console, 'log');
  logHello();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith('hello');
});