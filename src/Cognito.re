// Node Compatability Polyfill
[%raw "require('isomorphic-fetch')"];

// Types for organization.
include Types;

let makeCognitoClient = config => {
  cognitoUserPool(config);
};

let signUp =
    (client, ~username, ~password, ~attributes=?, ~validationData=?, ()) => {
  Js.Promise.make((~resolve, ~reject) => {
    let callback = (err, data) => {
      // Rethrow all the cognito errors as reason

      let code =
        switch (cognitoErrorCodesFromJs(err##code)) {
        | Some(code) => code
        | None => `ReactCognitoUnknownException
        };

      let cognitoError = {code, message: err##message};

      switch (cognitoError.code) {
      | `InvalidPasswordException =>
        Js.log2("INVALID PASSWORD", cognitoError.message)
      | `ReactCognitoUnknownException =>
        Js.log2("Unknown Error", cognitoError.message)
      };

      Js.log2("DATA", data);
    };

    let client = signUp(client, ~username, ~password, ~callback);

    switch (attributes, validationData) {
    | (Some(attributes), Some(validationData)) =>
      client(~attributes, ~validationData, ())
    | (Some(attributes), None) => client(~attributes, ())
    | (None, Some(validationData)) => client(~validationData, ())
    | (None, None) => client()
    };

    ();
  });
};