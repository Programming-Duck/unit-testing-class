function double(val) {
  return val * 2;
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

function toggleActiveClassOnBody() {
  document.body.classList.toggle('active');
}

export {double, Circle, toggleActiveClassOnBody};