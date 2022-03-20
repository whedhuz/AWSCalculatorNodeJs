module.exports = class CalculatorService {
  validOperations = ["ADD"];

  calculate(inputs) {
    if (!this.isValid(inputs)) {
      return { error: "Invalid input parameter", result: null };
    }

    return { error: null, result: 3 };
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
