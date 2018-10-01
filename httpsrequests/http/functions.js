module.exports = function getAndPrintHTML(requestOptions, callback) {
    var https = require('https');
    var output = "";

    https.get(requestOptions, function (response) {

      response.setEncoding('utf8');

      response.on('data', function (data) {
        output += data;
        callback(output)
      });
    });
  }
