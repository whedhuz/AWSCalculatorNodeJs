module.exports = class Calculator {
  add(number1, number2) {
    return Math.trunc(number1) + Math.trunc(number2);
  }

  subtract(number1, number2) {
    return Math.trunc(number1) - Math.trunc(number2);
  }

  multiply(number1, number2) {
    return Math.trunc(number1) * Math.trunc(number2);
  }

  tryDivide(number1, number2) {
    let truncNumber2 = Math.trunc(number2);
    if (truncNumber2 == 0) {
      return { error: "Cannot divide by 0", result: null };
    }

    return {
      error: null,
      result: +(Math.trunc(number1) / truncNumber2).toPrecision(10),
    };
  }
};
