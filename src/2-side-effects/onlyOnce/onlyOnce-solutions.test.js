import onlyOnce from './onlyOnce';

describe('onlyOnce', function() {
  test('onlyOnce(fn)() should call fn with no arguments', function() {
    const spy = jest.fn();
    const onceSpy = onlyOnce(spy);

    onceSpy();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();
  });

  test('onlyOnce(fn) should not call fn', function() {
    const spy = jest.fn();
    onlyOnce(spy);

    expect(spy).not.toHaveBeenCalled();
  });

  test('when the function returned from onlyOnce(fn) is called multiple times, it should only call fn the first time', function() {
    const spy = jest.fn();
    const onceSpy = onlyOnce(spy);

    onceSpy();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();

    onceSpy();
    onceSpy();
    onceSpy();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith();
  });

  test('onlyOnce(fn)(1, 2, 3) should call fn with the arguments `1, 2, 3`', function() {
    const spy = jest.fn();
    const onceSpy = onlyOnce(spy);

    onceSpy(1, 2, 3);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1, 2, 3);
  });
});