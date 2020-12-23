import {double, Circle, toggleActiveClassOnBody} from './implementation-details';

/*
  For these 2 tests, we've copied the implementation from the source code.
  If the source code is wrong, the test will also have the same mistake, and will result in a false positive.
*/

test('double', function() {
  const val = 5;
  const result = double(5);
  expect(result).toBe(val * 2);
})

test('Circle', function() {
  const radius = 5;
  const circle = new Circle(radius);
  const result = circle.getArea();
  expect(result).toBe(Math.PI * radius ** 2);
});

/*
  This test has the same effect. We're verifying the implementation in our source code.
  If the source code is wrong, the test will also have the same mistake, and will result in a false positive.
*/

test('toggleActiveClassOnBody', function() {
  const spy = jest.spyOn(document.body.classList, 'toggle');
  toggleActiveClassOnBody();
  expect(spy).toHaveBeenCalledTimes(1);
  expect(spy).toHaveBeenCalledWith('active');
});
