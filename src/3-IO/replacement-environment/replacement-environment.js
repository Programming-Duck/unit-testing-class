function appendToDOM(text) {
  const div = document.createElement('div');
  div.id = 'my-id';
  div.textContent = text;
  document.body.append(div);
}

function toggleActiveClassOnBody() {
  document.body.classList.toggle('active');
}

function saveToDatabase(data, fakeDB) {
  fakeDB.save(data);
}

export { appendToDOM, toggleActiveClassOnBody, saveToDatabase };