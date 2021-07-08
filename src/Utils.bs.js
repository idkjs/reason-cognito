// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");

function makeJsonStringsFromDictValues(map) {
  return Js_dict.map((function (v) {
                return v;
              }), map);
}

function jsonMapString(arr) {
  return $$Array.map((function (item) {
                return Js_dict.map((function (value) {
                              return value;
                            }), item);
              }), arr);
}

exports.makeJsonStringsFromDictValues = makeJsonStringsFromDictValues;
exports.jsonMapString = jsonMapString;
/* No side effect */