import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_apigateway, aws_lambda_nodejs, aws_lambda } from "aws-cdk-lib";

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new aws_apigateway.RestApi(this, "TestApi", {
      defaultCorsPreflightOptions: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
        ],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: ["*"],
      },
    });

    const createUserFunction = new aws_lambda_nodejs.NodejsFunction(
      this,
      "CreateUser",
      {
        runtime: aws_lambda.Runtime.NODEJS_20_X,
        handler: "handler",
        entry: "createUser.ts",
        functionName: "CreateUser",
        bundling: {
          minify: true,
          sourceMap: true,
          externalModules: ["aws-sdk"],
        },
      },
    );

    const users = api.root.addResource("users");

    users.addMethod(
      "POST",
      new aws_apigateway.LambdaIntegration(createUserFunction),
    );

    users.addMethod(
      "DELETE",
      new aws_apigateway.LambdaIntegration(createUserFunction),
    );
  }
}
