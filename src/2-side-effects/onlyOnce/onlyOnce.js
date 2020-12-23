function onlyOnce(fn) {
  let hasBeenCalled = false;

  function execute(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  }
  return execute;
}

export default onlyOnce;