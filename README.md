# AWS Calculator

Description
------------------------------

This is a simple naive calculator service using AWS Lambda and AWS API Gateway.
Data is expected to have 3 query parameters: 2 integer numbers and the operation.
An error will be returned as 400 status code when:
1. the operation is not in the expected value of: ADD, MIN, MUL, DIV.
2. request does not provide 2 numbers
3. trying to divide by 0

The calculator is naive because it only looks at the integer value of the input without rounding, and result of division is limited to 10 decimal point precision;

Sample URL:
https://9wpjn94sjk.execute-api.ap-southeast-2.amazonaws.com/Dev/Calculator?number1=3&number2=2&operation=ADD
WITH APIKEY: 
*Secret*

Assumptions
------------------------------

1. Authentication is not required as it is not being asked, but can be implemented in the API Gateway when necessary
2. Data is expected via a GET request as this is not an action that makes a permament change in the system.
3. Used Lambda for easier plug and play rather than using a EC2 as this is a very simple and isolated functionality
4. We want MVP of a simpliest calculator, hence we only deal with integer


Risks
------------------------------
1. The service is limited to the maximum concurrent number of APIGateway and Lambda available
2. Solution is deployed manually via AWS Console, any forgotten code update will break the new deployment and it will be hard to find the missing update for large number of file changes.
3. Deployment does not use ALIAS, hence any error in the newly deployed code will reflect to PRODUCTION

Improvements
------------------------------
1. Deployment should be through CI/CD pipeline via AWS CodePipeline
2. Infrastructure can be put as code using cdk and CloudFormation
3. API Gateway name can be fronted by a custom domain name via AWS Route53
4. Calculator functionallity can be improved in different ways :
4.1. Include floating point calculations and accept precisions
4.2. Handle large number exceptions
5. Lambda should use ALIAS to have different stages of deployment


Tech Used
------------------------------
The game was developed in NodeJs, AWS Lambda and AWS API Gateway in AWS Console
