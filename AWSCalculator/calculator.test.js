const Calculator = require("./calculator");

test("Addition valid integer should return expected value", () => {
  var calculator = new Calculator();
  var result = calculator.add(1, 2);
  expect(result).toBe(3);
});

test("Addition valid float should return the integer value addition", () => {
  var calculator = new Calculator();
  var result = calculator.add(1.1, 2.2);
  expect(result).toBe(3);
});
