const Calculator = require("./calculator");

module.exports = class CalculatorService {
  // Should be changed to enums
  validOperations = ["ADD", "MIN", "MUL", "DIV"];
  #calculator;

  constructor() {
    this.#calculator = new Calculator();
  }

  calculate(inputs) {
    if (!this.isValid(inputs)) {
      return { error: "Invalid input parameter", result: null };
    }

    let number1 = inputs.number1;
    let number2 = inputs.number2;
    let error = null;
    let result = 0;

    switch (inputs.operation) {
      case "ADD":
        result = this.#calculator.add(number1, number2);
        break;
      case "MIN":
        result = this.#calculator.subtract(number1, number2);
        break;
      case "MUL":
        result = this.#calculator.multiply(number1, number2);
        break;
      case "DIV":
        let divOutput = this.#calculator.tryDivide(number1, number2);
        error = divOutput.error;
        result = divOutput.result;
        break;
      default:
        return { error: "Invalid operation", result: null };
    }

    return { error: error, result: result };
  }

  // Check if the inputs contain expected data structure and the given operation is in the expected list of operations
  isValid(inputs) {
    return (
      inputs.number1 &&
      !isNaN(inputs.number1) &&
      inputs.number2 &&
      !isNaN(inputs.number2) &&
      inputs.operation &&
      this.validOperations.indexOf(inputs.operation) != -1
    );
  }
};
