import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_ec2 } from "aws-cdk-lib";

export class TestStack extends Stack {
  private vpc: aws_ec2.Vpc;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new aws_ec2.Vpc(this, "vpc");

    const subnetIds = [];
    for (const subnet of this.vpc.privateSubnets) {
      subnetIds.push(subnet.subnetId);
    }
  }
}
