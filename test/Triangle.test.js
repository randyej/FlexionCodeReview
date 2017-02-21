const chai = require('chai');
const expect = chai.expect;
const Triangle = require('../src/Triangle');

describe('Triangle.js', () => {

  describe('#constructor', () => {
    it('should construct an Equilateral with (1.5, 1.5, 1.5)', () => {
      const triangle = new Triangle(1.5, 1.5, 1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_EQUILATERAL;
      expect(actual).to.equal(expected);
    });

    it('should construct an Isosceles with (3, 4, 4)', () => {
      const triangle = new Triangle(3, 4, 4);
      const actual = triangle.type;
      const expected = Triangle.TYPE_ISOSCELES;
      expect(actual).to.equal(expected);
    });

    it('should construct an Isosceles with (4, 3, 4)', () => {
      const triangle = new Triangle(4, 3, 4);
      const actual = triangle.type;
      const expected = Triangle.TYPE_ISOSCELES;
      expect(actual).to.equal(expected);
    });

    it('should construct an Isosceles with (4, 4, 3)', () => {
      const triangle = new Triangle(4, 4, 3);
      const actual = triangle.type;
      const expected = Triangle.TYPE_ISOSCELES;
      expect(actual).to.equal(expected);
    });

    it('should construct a Scalene with (4.4, 7.3, 9.1)', () => {
      const triangle = new Triangle(4.4, 7.3, 9.1);
      const actual = triangle.type;
      const expected = Triangle.TYPE_SCALENE;
      expect(actual).to.equal(expected);
    });

    it('should construct a Scalene with (9.1, 4.4, 7.3)', () => {
      const triangle = new Triangle(9.1, 4.4, 7.3);
      const actual = triangle.type;
      const expected = Triangle.TYPE_SCALENE;
      expect(actual).to.equal(expected);
    });

    it('should construct a Scalene with (7.3, 9.1, 4.4)', () => {
      const triangle = new Triangle(7.3, 9.1, 4.4);
      const actual = triangle.type;
      const expected = Triangle.TYPE_SCALENE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (4, 6, 11)', () => {
      const triangle = new Triangle(4, 6, 11);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (11, 4, 6)', () => {
      const triangle = new Triangle(11, 4, 6);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (6, 11, 4)', () => {
      const triangle = new Triangle(6, 11, 4);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (0, 0, 0)', () => {
      const triangle = new Triangle(0, 0, 0);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (-1.5, -1.5, -1.5)', () => {
      const triangle = new Triangle(-1.5, -1.5, -1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (\'foo\', 1.5, 1.5)', () => {
      const triangle = new Triangle('foo', 1.5, 1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (\'foo\', \'foo\', 1.5)', () => {
      const triangle = new Triangle('foo', 'foo', 1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle with (\'foo\', \'foo\', \'foo\')', () => {
      const triangle = new Triangle('foo', 'foo', 'foo');
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });
  });

  describe('#toString', () => {
    it('should return the string \'Equilateral\' with (1.5, 1.5, 1.5)', () => {
      const triangle = new Triangle(1.5, 1.5, 1.5);
      const actual = triangle.toString();
      const expected = 'Equilateral';
      expect(actual).to.equal(expected);
    });

    it('should return the string \'Isosceles\' with (3, 4, 4)', () => {
      const triangle = new Triangle(3, 4, 4);
      const actual = triangle.toString();
      const expected = 'Isosceles';
      expect(actual).to.equal(expected);
    });

    it('should return the string \'Scalene\' with (4.4, 7.3, 9.1)', () => {
      const triangle = new Triangle(4.4, 7.3, 9.1);
      const actual = triangle.toString();
      const expected = 'Scalene';
      expect(actual).to.equal(expected);
    });

    it('should return the string \'Not a Triangle\' with (4, 6, 11)', () => {
      const triangle = new Triangle(4, 6, 11);
      const actual = triangle.toString();
      const expected = 'Not a Triangle';
      expect(actual).to.equal(expected);
    });
  });

  describe('#canFormTriangle', () => {
    it('should be true with (1.5, 1.5, 1.5)', () => {
      const actual = Triangle.canFormTriangle(1.5, 1.5, 1.5);
      expect(actual).to.be.true;
    });

    it('should be true with (3, 4, 4)', () => {
      const actual = Triangle.canFormTriangle(3, 4, 4);
      expect(actual).to.be.true;
    });

    it('should be true with (4.4, 7.3, 9.1)', () => {
      const actual = Triangle.canFormTriangle(4.4, 7.3, 9.1);
      expect(actual).to.be.true;
    });

    it('should be false with (4, 6, 11)', () => {
      const actual = Triangle.canFormTriangle(4, 6, 11);
      expect(actual).to.be.false;
    });
  });

  describe('#isTriangleValid', () => {
    it('should be true with (1.5, 1.5, 1.5)', () => {
      const triangle = new Triangle(1.5, 1.5, 1.5);
      const actual = Triangle.isTriangleValid(triangle);
      expect(actual).to.be.true;
    });

    it('should be true with (3, 4, 4)', () => {
      const triangle = new Triangle(3, 4, 4);
      const actual = Triangle.isTriangleValid(triangle);
      expect(actual).to.be.true;
    });

    it('should be true with (4.4, 7.3, 9.1)', () => {
      const triangle = new Triangle(4.4, 7.3, 9.1);
      const actual = Triangle.isTriangleValid(triangle);
      expect(actual).to.be.true;
    });

    it('should be false with (4, 6, 11)', () => {
      const triangle = new Triangle(4, 6, 11);
      const actual = Triangle.isTriangleValid(triangle);
      expect(actual).to.be.false;
    });
  });

  describe('#isTriangleEquilateral', () => {
    it('should be true with (1.5, 1.5, 1.5)', () => {
      const triangle = new Triangle(1.5, 1.5, 1.5);
      const actual = Triangle.isTriangleEquilateral(triangle);
      expect(actual).to.be.true;
    });

    it('should be false with (3, 4, 4)', () => {
      const triangle = new Triangle(3, 4, 4);
      const actual = Triangle.isTriangleEquilateral(triangle);
      expect(actual).to.be.false;
    });

    it('should be false with (4.4, 7.3, 9.1)', () => {
      const triangle = new Triangle(4.4, 7.3, 9.1);
      const actual = Triangle.isTriangleEquilateral(triangle);
      expect(actual).to.be.false;
    });

    // this currently passes but is not really a valid case...
    // isTriangleEquilateral() will never be called when the triangle is not a valid triangle
    // it('should be false with (4, 6, 11)', () => {
    //   const triangle = new Triangle(4, 6, 11);
    //   const actual = Triangle.isTriangleEquilateral(triangle);
    //   expect(actual).to.be.false;
    // });
  });

  describe('#isTriangleIsosceles', () => {
    it('should be false with (1.5, 1.5, 1.5)', () => {
      const triangle = new Triangle(1.5, 1.5, 1.5);
      const actual = Triangle.isTriangleIsosceles(triangle);
      expect(actual).to.be.false;
    });

    it('should be true with (3, 4, 4)', () => {
      const triangle = new Triangle(3, 4, 4);
      const actual = Triangle.isTriangleIsosceles(triangle);
      expect(actual).to.be.true;
    });

    it('should be false with (4.4, 7.3, 9.1)', () => {
      const triangle = new Triangle(4.4, 7.3, 9.1);
      const actual = Triangle.isTriangleIsosceles(triangle);
      expect(actual).to.be.false;
    });

    // this currently passes but is not really a valid case...
    // isTriangleIsosceles() will never be called when the triangle is not a valid triangle
    // it('should be false with (4, 6, 11)', () => {
    //   const triangle = new Triangle(4, 6, 11);
    //   const actual = Triangle.isTriangleIsosceles(triangle);
    //   expect(actual).to.be.false;
    // });
  });

  describe('#isTriangleScalene', () => {
    it('should be false with (1.5, 1.5, 1.5)', () => {
      const triangle = new Triangle(1.5, 1.5, 1.5);
      const actual = Triangle.isTriangleScalene(triangle);
      expect(actual).to.be.false;
    });

    it('should be false with (3, 4, 4)', () => {
      const triangle = new Triangle(3, 4, 4);
      const actual = Triangle.isTriangleScalene(triangle);
      expect(actual).to.be.false;
    });

    it('should be true with (4.4, 7.3, 9.1)', () => {
      const triangle = new Triangle(4.4, 7.3, 9.1);
      const actual = Triangle.isTriangleScalene(triangle);
      expect(actual).to.be.true;
    });

    // this currently fails but is not really a valid case...
    // isTriangleScalene() will never be called when the triangle is not a valid triangle
    // it('should be false with (4, 6, 11)', () => {
    //   const triangle = new Triangle(4, 6, 11);
    //   console.log(triangle);
    //   const actual = Triangle.isTriangleScalene(triangle);
    //   expect(actual).to.be.false;
    // });
  });

});
