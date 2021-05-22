// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var CognitoJson_bs = require("./atd/CognitoJson_bs.bs.js");

function make(param) {
  var message = param.message;
  switch (param.__type) {
    case "InternalErrorException" :
        return {
                NAME: "CognitoInternalError",
                VAL: message
              };
    case "InvalidLambdaResponseException" :
        return {
                NAME: "CognitoInvalidLambdaResponse",
                VAL: message
              };
    case "InvalidParameterException" :
        return {
                NAME: "CognitoInvalidParameter",
                VAL: message
              };
    case "NotAuthorizedException" :
        return {
                NAME: "CognitoNotAuthorized",
                VAL: message
              };
    case "ResourceNotFoundException" :
        return {
                NAME: "CognitoResourceNotFound",
                VAL: message
              };
    case "TooManyRequestsException" :
        return {
                NAME: "CognitoTooManyRequests",
                VAL: message
              };
    case "UnexpectedLambdaException" :
        return {
                NAME: "CognitoUnexpectedLambda",
                VAL: message
              };
    case "UserLambdaValidationException" :
        return {
                NAME: "CognitoUserLambdaValidation",
                VAL: message
              };
    default:
      return ;
  }
}

function makeFromJson(json) {
  return make(Curry._1(CognitoJson_bs.read_error, json));
}

var Common = {
  make: make,
  makeFromJson: makeFromJson
};

function make$1(param) {
  var message = param.message;
  switch (param.__type) {
    case "CodeDeliveryFailureException" :
        return {
                NAME: "CognitoCodeDeliveryFailure",
                VAL: message
              };
    case "InvalidEmailRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidEmailRoleAccessPolicy",
                VAL: message
              };
    case "InvalidPasswordException" :
        return {
                NAME: "CognitoInvalidPassword",
                VAL: message
              };
    case "InvalidSmsRoleAccessPolicysException" :
        return {
                NAME: "CognitoInvalidSmsRoleAccessPolicys",
                VAL: message
              };
    case "InvalidSmsRoleTrustRelationshipException" :
        return {
                NAME: "CognitoInvalidSmsRoleTrustRelationship",
                VAL: message
              };
    case "UsernameExistsException" :
        return {
                NAME: "CognitoUsernameExists",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$1(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$1(err);
  }
}

var ConfirmSignUp = {
  make: make$1,
  makeFromJson: makeFromJson$1
};

function make$2(param) {
  var message = param.message;
  switch (param.__type) {
    case "CodeDeliveryFailureException" :
        return {
                NAME: "CognitoCodeDeliveryFailure",
                VAL: message
              };
    case "InvalidEmailRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidEmailRoleAccessPolicy",
                VAL: message
              };
    case "InvalidPasswordException" :
        return {
                NAME: "CognitoInvalidPassword",
                VAL: message
              };
    case "InvalidSmsRoleAccessPolicysException" :
        return {
                NAME: "CognitoInvalidSmsRoleAccessPolicys",
                VAL: message
              };
    case "InvalidSmsRoleTrustRelationshipException" :
        return {
                NAME: "CognitoInvalidSmsRoleTrustRelationship",
                VAL: message
              };
    case "UsernameExistsException" :
        return {
                NAME: "CognitoUsernameExists",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$2(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$2(err);
  }
}

var SignUpErrors = {
  make: make$2,
  makeFromJson: makeFromJson$2
};

function make$3(param) {
  var message = param.message;
  switch (param.__type) {
    case "InvalidSmsRoleAccessPolicysException" :
        return {
                NAME: "CognitoInvalidSmsRoleAccessPolicys",
                VAL: message
              };
    case "InvalidSmsRoleTrustRelationshipException" :
        return {
                NAME: "CognitoInvalidSmsRoleTrustRelationship",
                VAL: message
              };
    case "InvalidUserPoolConfigurationException" :
        return {
                NAME: "CognitoInvalidUserPoolConfiguration",
                VAL: message
              };
    case "PasswordResetRequiredException" :
        return {
                NAME: "CognitoPasswordResetRequired",
                VAL: message
              };
    case "UserNotConfirmedException" :
        return {
                NAME: "CognitoUserNotConfirmed",
                VAL: message
              };
    case "UserNotFoundException" :
        return {
                NAME: "CognitoUserNotFound",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$3(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$3(err);
  }
}

var InitiateAuth = {
  make: make$3,
  makeFromJson: makeFromJson$3
};

function make$4(param) {
  var message = param.message;
  switch (param.__type) {
    case "InvalidPasswordException" :
        return {
                NAME: "CognitoInvalidPassword",
                VAL: message
              };
    case "LimitExceededException" :
        return {
                NAME: "CognitoLimitExceeded",
                VAL: message
              };
    case "PasswordResetRequiredException" :
        return {
                NAME: "CognitoPasswordResetRequired",
                VAL: message
              };
    case "UserNotConfirmedException" :
        return {
                NAME: "CognitoUserNotConfirmed",
                VAL: message
              };
    case "UserNotFoundException" :
        return {
                NAME: "CognitoUserNotFound",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$4(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$4(err);
  }
}

var ChangePassword = {
  make: make$4,
  makeFromJson: makeFromJson$4
};

function make$5(param) {
  var message = param.message;
  switch (param.__type) {
    case "CodeMismatchException" :
        return {
                NAME: "CognitoCodeMismatch",
                VAL: message
              };
    case "ExpiredCodeException" :
        return {
                NAME: "CognitoExpiredCode",
                VAL: message
              };
    case "InvalidPasswordException" :
        return {
                NAME: "CognitoInvalidPassword",
                VAL: message
              };
    case "LimitExceededException" :
        return {
                NAME: "CognitoLimitExceeded",
                VAL: message
              };
    case "TooManyFailedAttemptsException" :
        return {
                NAME: "CognitoTooManyFailedAttempts",
                VAL: message
              };
    case "UserNotConfirmedException" :
        return {
                NAME: "CognitoUserNotConfirmed",
                VAL: message
              };
    case "UserNotFoundException" :
        return {
                NAME: "CognitoUserNotFound",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$5(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$5(err);
  }
}

var ConfirmForgotPassword = {
  make: make$5,
  makeFromJson: makeFromJson$5
};

function make$6(param) {
  var message = param.message;
  switch (param.__type) {
    case "CodeDeliveryFailureException" :
        return {
                NAME: "CognitoCodeDeliveryFailure",
                VAL: message
              };
    case "InvalidEmailRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidEmailRoleAccessPolicy",
                VAL: message
              };
    case "InvalidSmsRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidSmsRoleAccessPolicy",
                VAL: message
              };
    case "InvalidSmsRoleTrustRelationshipException" :
        return {
                NAME: "CognitoInvalidSmsRoleTrustRelationship",
                VAL: message
              };
    case "LimitExceededException" :
        return {
                NAME: "CognitoLimitExceeded",
                VAL: message
              };
    case "UserNotConfirmedException" :
        return {
                NAME: "CognitoUserNotConfirmed",
                VAL: message
              };
    case "UserNotFoundException" :
        return {
                NAME: "CognitoUserNotFound",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$6(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$6(err);
  }
}

var ForgotPassword = {
  make: make$6,
  makeFromJson: makeFromJson$6
};

function make$7(param) {
  var message = param.message;
  switch (param.__type) {
    case "CodeDeliveryFailureException" :
        return {
                NAME: "CognitoCodeDeliveryFailure",
                VAL: message
              };
    case "InvalidEmailRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidEmailRoleAccessPolicy",
                VAL: message
              };
    case "InvalidSmsRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidSmsRoleAccessPolicy",
                VAL: message
              };
    case "InvalidSmsRoleTrustRelationshipException" :
        return {
                NAME: "CognitoInvalidSmsRoleTrustRelationship",
                VAL: message
              };
    case "LimitExceededException" :
        return {
                NAME: "CognitoLimitExceeded",
                VAL: message
              };
    case "UserNotFoundException" :
        return {
                NAME: "CognitoUserNotFound",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$7(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$7(err);
  }
}

var ResendConfirmationCode = {
  make: make$7,
  makeFromJson: makeFromJson$7
};

function make$8(param) {
  var message = param.message;
  switch (param.__type) {
    case "AliasExistsException" :
        return {
                NAME: "CognitoAliasExists",
                VAL: message
              };
    case "CodeMismatchException" :
        return {
                NAME: "CognitoCodeMismatch",
                VAL: message
              };
    case "ExpiredCodeException" :
        return {
                NAME: "CognitoExpiredCode",
                VAL: message
              };
    case "InvalidPasswordException" :
        return {
                NAME: "CognitoInvalidPassword",
                VAL: message
              };
    case "InvalidSmsRoleAccessPolicyException" :
        return {
                NAME: "CognitoInvalidSmsRoleAccessPolicy",
                VAL: message
              };
    case "InvalidSmsRoleTrustRelationshipException" :
        return {
                NAME: "CognitoInvalidSmsRoleTrustRelationship",
                VAL: message
              };
    case "InvalidUserPoolConfigurationException" :
        return {
                NAME: "CognitoInvalidUserPoolConfiguration",
                VAL: message
              };
    case "MFAMethodNotFoundException" :
        return {
                NAME: "CognitoMFAMethodNotFound",
                VAL: message
              };
    case "PasswordResetRequiredException" :
        return {
                NAME: "CognitoPasswordResetRequired",
                VAL: message
              };
    case "SoftwareTokenMFANotFoundException" :
        return {
                NAME: "CognitoSoftwareTokenMFANotFound",
                VAL: message
              };
    case "UserNotConfirmedException" :
        return {
                NAME: "CognitoUserNotConfirmed",
                VAL: message
              };
    case "UserNotFoundException" :
        return {
                NAME: "CognitoUserNotFound",
                VAL: message
              };
    default:
      return "ReasonCognitoUnknownError";
  }
}

function makeFromJson$8(json) {
  var err = Curry._1(CognitoJson_bs.read_error, json);
  var commonError = make(err);
  if (commonError !== undefined) {
    return commonError;
  } else {
    return make$8(err);
  }
}

var RespondToAuthChallenge = {
  make: make$8,
  makeFromJson: makeFromJson$8
};

exports.Common = Common;
exports.ConfirmSignUp = ConfirmSignUp;
exports.SignUpErrors = SignUpErrors;
exports.InitiateAuth = InitiateAuth;
exports.ChangePassword = ChangePassword;
exports.ConfirmForgotPassword = ConfirmForgotPassword;
exports.ForgotPassword = ForgotPassword;
exports.ResendConfirmationCode = ResendConfirmationCode;
exports.RespondToAuthChallenge = RespondToAuthChallenge;
/* CognitoJson_bs Not a pure module */
