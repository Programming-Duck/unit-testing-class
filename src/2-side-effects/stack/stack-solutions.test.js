import Stack from './stack';

describe('stack', function() {
  describe('isEmpty', function() {
    test('isEmpty should return true after initialising Stack', function() {
      const stack = new Stack();
      const result = stack.isEmpty();
      expect(result).toBe(true);
    });

    test('isEmpty should return false after pushing an item on the stack', function() {
      const stack = new Stack();

      stack.push(1);

      const result = stack.isEmpty();
      expect(result).toBe(false);
    });
  })

  describe('push and pop', function() {
    test('pop should return undefined after initialising the Stack', function() {
      const stack = new Stack();
      const result = stack.pop();
      expect(result).toBe(undefined);
    });

    test('pop should return item that was pushed into the stack', function() {
      const stack = new Stack();

      stack.push(1);
      const result = stack.pop();

      expect(result).toBe(1);
    });

    test('pop should return items pushed into the stack in reverse order', function() {
      const stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);
      const item1 = stack.pop();
      const item2 = stack.pop();
      const item3 = stack.pop();

      expect(item1).toBe(3);
      expect(item2).toBe(2);
      expect(item3).toBe(1);
    });
  });

  test('size should return the current size of the stack', function() {
    const stack = new Stack();
    expect(stack.size()).toBe(0);

    stack.push(1);
    expect(stack.size()).toBe(1);

    stack.push(2);
    expect(stack.size()).toBe(2);

    stack.pop();
    expect(stack.size()).toBe(1);

    stack.pop();
    expect(stack.size()).toBe(0);
  });
})