import { Handler } from "aws-lambda";

export const handler: Handler = async (event, context) => {
  console.log(event.authorizationToken);
  throw new Error("Not authorized");
};
