
docker-compose up -d
cdklocal bootstrap
cdklocal deploy


```
 ❌  TestStack failed: Error: The stack named TestStack failed to deploy: CREATE_FAILED (Resource deployment loop completed, pending resource changes: [{'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPublicSubnet1NATGateway9C16659E', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::NatGateway', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPublicSubnet2NATGateway9B8AE11A', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::NatGateway', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::Route', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPrivateSubnet2DefaultRouteB0E07F99', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::Route', 'Scope': [], 'Details': []}}])
    at FullCloudFormationDeployment.monitorDeployment (/home/hugo/.nvm/versions/node/v18.20.2/lib/node_modules/aws-cdk/lib/index.js:440:10568)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.deployStack2 [as deployStack] (/home/hugo/.nvm/versions/node/v18.20.2/lib/node_modules/aws-cdk/lib/index.js:443:199515)
    at async /home/hugo/.nvm/versions/node/v18.20.2/lib/node_modules/aws-cdk/lib/index.js:443:181237

 ❌ Deployment failed: Error: The stack named TestStack failed to deploy: CREATE_FAILED (Resource deployment loop completed, pending resource changes: [{'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPublicSubnet1NATGateway9C16659E', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::NatGateway', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPublicSubnet2NATGateway9B8AE11A', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::NatGateway', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::Route', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPrivateSubnet2DefaultRouteB0E07F99', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::Route', 'Scope': [], 'Details': []}}])
    at FullCloudFormationDeployment.monitorDeployment (/home/hugo/.nvm/versions/node/v18.20.2/lib/node_modules/aws-cdk/lib/index.js:440:10568)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.deployStack2 [as deployStack] (/home/hugo/.nvm/versions/node/v18.20.2/lib/node_modules/aws-cdk/lib/index.js:443:199515)
    at async /home/hugo/.nvm/versions/node/v18.20.2/lib/node_modules/aws-cdk/lib/index.js:443:181237

The stack named TestStack failed to deploy: CREATE_FAILED (Resource deployment loop completed, pending resource changes: [{'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPublicSubnet1NATGateway9C16659E', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::NatGateway', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPublicSubnet2NATGateway9B8AE11A', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::NatGateway', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPrivateSubnet1DefaultRoute1AA8E2E5', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::Route', 'Scope': [], 'Details': []}}, {'Type': 'Resource', 'ResourceChange': {'Action': 'Add', 'LogicalResourceId': 'vpcPrivateSubnet2DefaultRouteB0E07F99', 'PhysicalResourceId': None, 'ResourceType': 'AWS::EC2::Route', 'Scope': [], 'Details': []}}])
```
