const Calculator = require("./calculator");

module.exports = class CalculatorService {
  validOperations = ["ADD"];
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
    let result = 0;

    switch (inputs.operation) {
      case "ADD":
        result = this.#calculator.add(number1, number2);
        break;
      default:
        return { error: "Invalid operation", result: null };
    }

    return { error: null, result: result };
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
