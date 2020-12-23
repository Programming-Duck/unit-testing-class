import {appendToDOM, toggleActiveClassOnBody, saveToDatabase} from './replacement-environment';

test('appendToDOM', function() {
  appendToDOM('hello');

  const node = document.querySelector('#my-id');
  expect(node.textContent).toBe('hello');
});

test('toggleActiveClassOnBody should add active class if it doesnt exist', function() {
  const body = document.body;
  toggleActiveClassOnBody();
  expect(body.classList.contains('active')).toBe(true);
});

test('toggleActiveClassOnBody should remove active class if body currently has the active class', function() {
  const body = document.body;
  body.className = 'active';

  toggleActiveClassOnBody();

  expect(body.classList.contains('active')).toBe(false);
});

test('saveToDatabase', function() {
  // fakeDB would probably be a proper in-memory database that has the same call signature as your real database. Here we're just implementing a trivial example
  const fakeDB = {
    save(data) {
      this.data = data;
    }
  }
  saveToDatabase('foo', fakeDB);
  expect(fakeDB.data).toBe('foo');
});