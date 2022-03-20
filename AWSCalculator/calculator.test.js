const Calculator = require("./calculator");

test("Addition valid integer should return expected value", () => {
  let calculator = new Calculator();
  let result = calculator.add(1, 2);
  expect(result).toBe(3);
});

test("Addition valid float should return the integer value addition", () => {
  let calculator = new Calculator();
  let result = calculator.add(1.1, 2.2);
  expect(result).toBe(3);
});

test("Subtraction valid integer should return expected value", () => {
  let calculator = new Calculator();
  let result = calculator.subtract(2, 1);
  expect(result).toBe(1);
});

test("Subtraction valid float should return the integer value addition", () => {
  let calculator = new Calculator();
  let result = calculator.subtract(2.2, 1.1);
  expect(result).toBe(1);
});

test("Multiplication valid integer should return expected value", () => {
  let calculator = new Calculator();
  let result = calculator.multiply(2, 3);
  expect(result).toBe(6);
});

test("Multiplication valid float should return the integer value addition", () => {
  let calculator = new Calculator();
  let result = calculator.multiply(2.2, 3.5);
  expect(result).toBe(6);
});

test("Multiplication below zero should return 0", () => {
  let calculator = new Calculator();
  let result = calculator.multiply(2, 0.9);
  expect(result).toBe(0);
});

test("Division valid integer that results in integer should return expected value with expected precision", () => {
  let calculator = new Calculator();
  let output = calculator.tryDivide(6, 2);
  let expectedResult = 3.0;
  expect(output.error).toBeNull();
  expect(output.result).toBe(expectedResult);
});

test("Division valid integer that results in decimals should return expected value with expected precision", () => {
  let calculator = new Calculator();
  let output = calculator.tryDivide(1, 3);
  let expectedResult = 0.3333333333;
  expect(output.error).toBeNull();
  expect(output.result).toBe(expectedResult);
});

test("Division with zero should return error", () => {
  let calculator = new Calculator();
  let output = calculator.tryDivide(1, 0);
  expect(output.error).not.toBeNull();
  expect(output.result).toBeNull();
});
