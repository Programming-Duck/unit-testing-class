import {Circle} from './unnecessary-mocking';

/*
  One way to test that Circle is working is to test that _privateHelper works correctly and that getArea is calling _privateHelper correctly and returning its result.
  This is complicated, and it means that if we want to change how Circle works internally in the future we'll have to rewrite many tests.
  If we just test the end result of getArea, we avoid all these problems.
*/


test('bad test for circle getArea', function() {
  const circle = new Circle(5);
  const spy = jest.spyOn(circle, '_privateHelper');
  spy.mockReturnValue(100);

  const result = circle.getArea();

  expect(result).toBe(100);
  expect(spy).toHaveBeenCalledTimes(1);
});

test('test for circle _privateHelper', function() {
  const circle = new Circle(5);
  const result = circle._privateHelper();
  expect(result).toBeCloseTo(78.54, 2);
});