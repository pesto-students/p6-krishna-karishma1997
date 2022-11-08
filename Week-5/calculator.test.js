const mathOperations = require('./Exercise5-4');
describe("Calculator tests", () => {
    test('adding two numbers return the sum', () => {
      expect(mathOperations.sum(5,3)).toBe(8);
    });
    test('Subtracting two numbers returning the result',()=>{
      expect(mathOperations.diff(5,3)).toBe(2);
    });
    test('Multiplying two numbers returning result',()=>{
      expect(mathOperations.product(5,3)).toBe(15);
    })
   })