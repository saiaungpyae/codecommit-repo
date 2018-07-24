'use strict';

exports.handler = function(event, context, callback) {
  var result = {
    statusCode: 200,
    body: "WOW WOW WOW"
  };
  callback(null, result);
};
