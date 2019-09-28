// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Future = require("reason-future/src/Future.bs.js");
var Cognito = require("./Cognito.bs.js");
var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");

var jsMapperConstantArray = /* array */[
  /* tuple */[
    660140761,
    "token"
  ],
  /* tuple */[
    748543309,
    "code"
  ]
];

function response_typeToJs(param) {
  return Js_mapperRt.binarySearch(2, param, jsMapperConstantArray);
}

function response_typeFromJs(param) {
  return Js_mapperRt.revSearch(2, jsMapperConstantArray, param);
}

var emailAttribute = { };

emailAttribute["Name"] = "email";

emailAttribute["Value"] = "reasoncog@pck.email";

Future.mapOk(Future.mapError(Cognito.initiateAuth("idkjs", "123Password#", /* () */0), (function (err) {
            console.log(err);
            return /* () */0;
          })), (function (response) {
        switch (response.tag | 0) {
          case 0 : 
              console.log("hey it worked", response[0]);
              return /* () */0;
          case 1 : 
          case 2 : 
              console.log("Errmsg: ", response[0]);
              return /* () */0;
          case 3 : 
              console.log(response[0]);
              return /* () */0;
          
        }
      }));

exports.response_typeToJs = response_typeToJs;
exports.response_typeFromJs = response_typeFromJs;
exports.emailAttribute = emailAttribute;
/*  Not a pure module */
