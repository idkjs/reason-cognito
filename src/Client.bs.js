// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var Future = require("reason-future/src/Future.bs.js");
var FutureJs = require("reason-future/src/FutureJs.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Belt_Result = require("bs-platform/lib/js/belt_Result.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

((require('isomorphic-fetch')));

var idpEndpoint = "https://cognito-idp.us-east-2.amazonaws.com/";

function makeNetworkError(err) {
  return /* NetworkError */[err];
}

function request(operation, params) {
  var headers = { };
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-User-Agent"] = "aws-amplify/0.1.x js";
  headers["X-Amz-Target"] = "AWSCognitoIdentityProviderService." + operation;
  return Future.map(Future.map(Future.mapOk(Future.mapError(FutureJs.fromPromise(fetch(idpEndpoint, Fetch.RequestInit[/* make */0](/* Post */2, Caml_option.some(headers), Caml_option.some(JSON.stringify(params)), undefined, undefined, /* NoCORS */2, undefined, /* NoCache */3, undefined, undefined, undefined)(/* () */0)), makeNetworkError), (function (err) {
                            console.log("Network Error", err);
                            return /* Error */Block.__(1, [/* NetworkError */Block.__(0, ["There was a network error in the Reason-Cognito Library."])]);
                          })), (function (prim) {
                        return prim.headers;
                      })), Belt_Result.getExn), (function (headers) {
                var errors = headers._headers;
                var err = Caml_array.caml_array_get(errors["x-amzn-errortype"], 0);
                var msg = Caml_array.caml_array_get(errors["x-amzn-errormessage"], 0);
                if (err === "InvalidParameterException:") {
                  return /* Error */Block.__(1, [/* InvalidParameterException */Block.__(1, [msg])]);
                } else {
                  return /* Error */Block.__(1, [/* ReasonCognitoUnknownErrorException */Block.__(2, ["AWS Cognito returned an undocumented error code."])]);
                }
              }));
}

function buildQueryString(param) {
  return param[/* key */0] + ("=" + param[/* value */1]);
}

function make(values) {
  if (values) {
    return "?" + (buildQueryString(values[0]) + List.fold_left((function (a, b) {
                    return a + ("&" + buildQueryString(b));
                  }), "&", values[1]));
  } else {
    return "";
  }
}

var QueryString = /* module */[
  /* buildQueryString */buildQueryString,
  /* make */make
];

exports.idpEndpoint = idpEndpoint;
exports.makeNetworkError = makeNetworkError;
exports.request = request;
exports.QueryString = QueryString;
/*  Not a pure module */
