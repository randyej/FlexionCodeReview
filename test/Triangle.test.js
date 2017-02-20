const chai = require('chai');
const expect = chai.expect;
const Triangle = require('../src/Triangle');

describe('Triangle.js', () => {

  describe('#constructor', () => {
    it('should construct an Equlateral with (1.5, 1.5, 1.5)', () => {
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

    it('should NOT construct a Triangle (0, 0, 0)', () => {
      const triangle = new Triangle(0, 0, 0);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle (-1.5, -1.5, -1.5)', () => {
      const triangle = new Triangle(-1.5, -1.5, -1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle (\'foo\', 1.5, 1.5)', () => {
      const triangle = new Triangle('foo', 1.5, 1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle (\'foo\', \'foo\', 1.5)', () => {
      const triangle = new Triangle('foo', 'foo', 1.5);
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });

    it('should NOT construct a Triangle (\'foo\', \'foo\', \'foo\')', () => {
      const triangle = new Triangle('foo', 'foo', 'foo');
      const actual = triangle.type;
      const expected = Triangle.TYPE_NOT_A_TRIANGLE;
      expect(actual).to.equal(expected);
    });
  });

});
