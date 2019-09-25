let config =
  Cognito.userPoolConfig(
    ~userPoolId="us-east-2_pTFKTGtS3",
    ~clientId="3vjshpa4lgf92nfisjrg9os21a",
  );

let userPool = Cognito.makeCognitoClient(config);

let signupMonad =
  Cognito.signUp(userPool, ~username="patrick", ~password="Password123", ());