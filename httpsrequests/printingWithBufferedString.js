// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
function getAndPrintHTML() {
  var output = "";

  var requestOptions = {
    host: 'example.com',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      output += data
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('error', function() {
      console.log('Error reading data');
    });

    response.on('end', function () {
      console.log('Response stream complete: ', output + "\n");
    })
  });
};

getAndPrintHTML();
