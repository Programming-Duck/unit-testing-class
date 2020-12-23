class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return this._privateHelper();
  }

  _privateHelper() {
    return Math.PI * this.radius ** 2;
  }
}

export {Circle};