exports.handler = async (event) => {
  console.info("EVENT\n" + JSON.stringify(event, null, 2));

  var parameters = event.queryStringParameters;

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
