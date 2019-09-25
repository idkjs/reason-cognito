[@bs.deriving abstract]
type userPoolConfig = {
  [@bs.as "UserPoolId"]
  userPoolId: string,
  [@bs.as "ClientId"]
  clientId: string,
};

[@bs.deriving abstract]
type cognitoAttribute = {
  [@bs.as "Name"]
  name: string,
  [@bs.as "Value"]
  value: string,
};

[@bs.deriving abstract]
type codeDeliveryDetails = {
  [@bs.as "AttributeName"]
  attributeName: string,
  [@bs.as "DeliveryMedium"]
  deliveryMedium: string,
  [@bs.as "Destination"]
  destination: string,
};

[@bs.deriving abstract]
type signUpResponse = {
  [@bs.as "CodeDeliveryDetail"]
  codeDeliveryDetails,
  [@bs.as "UserConfirmed"]
  userConfirmed: bool,
  [@bs.as "UserSub"]
  userSub: string,
};

[@bs.deriving jsConverter]
type cognitoErrorCodes = [
  | `InvalidPasswordException
  | `ReactCognitoUnknownException
];

type cognitoError = {
  code: cognitoErrorCodes,
  message: string,
};

// Function types
type cognitoUserPool;
[@bs.new] [@bs.module "amazon-cognito-identity-js"]
external cognitoUserPool: userPoolConfig => cognitoUserPool =
  "CognitoUserPool";

type signupCallback = (Js.t(
    < code : string; message : string; >
  ), t) => unit;


[@bs.send]
external signUp:
  (
    cognitoUserPool,
    ~username: string,
    ~password: string,
    ~attributes: list(cognitoAttribute)=?,
    ~validationData: list(cognitoAttribute)=?,
    ~callback: signupCallback,
    unit
  ) =>
  unit =
  "signUp";