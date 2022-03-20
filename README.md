# AWS Calculator

Description
------------------------------

This is a simple integer calculator service using AWS Lambda and AWS API Gateway.
Data is expected to have 3 query parameters: 2 integer numbers and the operation.
An error will be returned as 400 status code when:
1. the operation is not in the expected value of: ADD, MIN, MUL, DIV.
2. request does not provide 2 numbers
3. trying to divide by 0


URL:


Assumptions
------------------------------

1. Authentication is not required as it is not being asked, but can be implemented in the API Gateway when necessary
2. Data is expected via a GET request as this is not an action that makes a permament change in the system.
3. Used Lambda for easier plug and play rather than using a EC2 as this is a very simple and isolated functionality
4. We want MVP of a simpliest calculator, hence we only deal with integer



Improvements
------------------------------
1. Deployment can be automated with CloudFormation, for now make things works by manual deployment from AWS Console
2. Infrastructure can be put as code using cdk
3. API Gateway name can be fronted by a custom domain name via AWS Route53
4. Calculator functionallity can be improved in different ways :
4.1. Include floating point calculations and accept precisions
4.2. Handle large number exceptions


Tech Used
------------------------------
The game was developed in NodeJs, AWS Lambda and AWS API Gateway in AWS Console
