
class Triangle {

  static get TYPE_NOT_A_TRIANGLE() { return 'not_a_triangle'; }
  static get TYPE_EQUILATERAL() { return 'equilateral'; }
  static get TYPE_ISOSCELES() { return 'isosceles'; }
  static get TYPE_SCALENE() { return 'scalene'; }

  constructor(lineA /*:number*/, lineB /*:number*/, lineC /*:number*/) {
    this.lineA = lineA;
    this.lineB = lineB;
    this.lineC = lineC;
    
    this.type = undefined;
    this.updateType();
  }

  updateType() {
    if(!Triangle.isTriangleValid(this)) {
      this.type = Triangle.TYPE_NOT_A_TRIANGLE;
    }
    else if(Triangle.isTriangleEquilateral(this)) {
      this.type = Triangle.TYPE_EQUILATERAL;
    }
    else if(Triangle.isTriangleIsosceles(this)) {
      this.type = Triangle.TYPE_ISOSCELES;
    }
    else if(Triangle.isTriangleScalene(this)) {
      this.type = Triangle.TYPE_SCALENE;
    }
  }

  toString() {
    let stringRep = '[object Triangle]';
    if(this.type === Triangle.TYPE_NOT_A_TRIANGLE) {
      stringRep = 'Not a Triangle';
    }
    else if(this.type === Triangle.TYPE_EQUILATERAL) {
      stringRep = 'Equilateral';
    }
    else if(this.type === Triangle.TYPE_ISOSCELES) {
      stringRep = 'Isosceles';
    }
    else if(this.type === Triangle.TYPE_SCALENE) {
      stringRep = 'Scalene';
    }
    return stringRep;
  }

  /**
   * Calculates if three line segments can be arranged to form a valid triangle.
   * We do this with the Triangle Inequality Theorem...
   * - the sum of two sides must be greater than the third side, which must be true for all three combinations
   */
  static canFormTriangle(lineA /*:number*/, lineB /*:number*/, lineC /*:number*/) {
    let isValid = false;
    if(lineA + lineB > lineC && lineA + lineC > lineB && lineB + lineC > lineA) {
      isValid = true;
    }
    return isValid;
  }

  /**
   * Calculates if a triangle is a valid triangle.
   */
  static isTriangleValid(triangle /*:Triangle*/) {
    const { lineA, lineB, lineC } = triangle;
    return Triangle.canFormTriangle(lineA, lineB, lineC);
  }

  /**
   * Calculates if a triangle is an equilateral triangle.
   * - all sides are the same length
   */
  static isTriangleEquilateral(triangle /*:Triangle*/) {
    const { lineA, lineB, lineC } = triangle;
    let isEquilateral = false;
    if(lineA === lineB && lineA === lineC && lineB === lineC) {
      isEquilateral = true;
    }
    return isEquilateral;
  }

  /**
   * Calculates if a triangle is an isosceles triangle.
   * - 2 out of 3 sides are the same length
   */
  static isTriangleIsosceles(triangle /*:Triangle*/) {
    const { lineA, lineB, lineC } = triangle;
    let isIsosceles = false;
    if( (lineA === lineB && lineA !== lineC) ||
      (lineA === lineC && lineA !== lineB) ||
      (lineB === lineC && lineB !== lineA) ) 
    {
      isIsosceles = true;
    }
    return isIsosceles;
  }

  /**
   * Calculates if a triangle is a scalene triangle.
   * - 0 sides are the same length
   */
  static isTriangleScalene(triangle /*:Triangle*/) {
    const { lineA, lineB, lineC } = triangle;
    let isScalene = false;
    if(lineA !== lineB && lineA !== lineC && lineB !== lineC) {
      isScalene = true;
    }
    return isScalene;
  }

}

module.exports = Triangle;
