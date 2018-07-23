'use strict';

exports.handler = function(event, context, callback) {
  var result = {
    statusCode: 200,
    body: "GGEZ"
  };
  callback(null, result);
};
