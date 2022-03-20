const CalculatorService = require("./calculator-service");

test("Given valid inputs then should return calculated value", () => {
  var calculatorService = new CalculatorService();
  var output = calculatorService.calculate({
    number1: "1",
    number2: "2",
    operation: "ADD",
  });
  expect(output.error).toBeNull();
  expect(output.result).toBe(3);
});

test("Given valid float inputs then should return the integer value addition", () => {
  var calculatorService = new CalculatorService();
  var output = calculatorService.calculate({
    number1: "1.1",
    number2: "2.2",
    operation: "ADD",
  });
  expect(output.error).toBeNull();
  expect(output.result).toBe(3);
});

test("Given invalid first input then should return an error message", () => {
  var calculatorService = new CalculatorService();
  var output = calculatorService.calculate({
    number1: "1a",
    number2: "2.2",
    operation: "ADD",
  });
  expect(output.error).not.toBeNull();
  expect(output.result).toBe(null);
});

test("Given invalid second input then should return an error message", () => {
  var calculatorService = new CalculatorService();
  var output = calculatorService.calculate({
    number1: "1",
    number2: "2b",
    operation: "ADD",
  });
  expect(output.error).not.toBeNull();
  expect(output.result).toBe(null);
});

test("Given invalid operation value then should return an error message", () => {
  var calculatorService = new CalculatorService();
  var output = calculatorService.calculate({
    number1: "1",
    number2: "2",
    operation: "NONE",
  });
  expect(output.error).not.toBeNull();
  expect(output.result).toBe(null);
});
