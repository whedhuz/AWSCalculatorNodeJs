const CalculatorService = require("./calculator-service");

exports.handler = async (event) => {
  console.info("EVENT\n" + JSON.stringify(event, null, 2));

  var inputs = event.queryStringParameters;

  let service = new CalculatorService();
  let output = service.calculate(inputs);

  if (output.error) {
    return {
      statusCode: 400,
      body: JSON.stringify(output.error),
    };
  }

  return {
    statusCode: 200,
    body: output.result,
  };
};
