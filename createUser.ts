import { APIGatewayProxyEvent } from "aws-lambda";

export async function handler(_event: APIGatewayProxyEvent) {
  return {
    statusCode: 201,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ username: "user" }),
  };
}
