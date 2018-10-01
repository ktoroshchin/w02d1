var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
function getAndPrintHTML(requestOptions, callback) {
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

function printHTML(html) {
  console.log(html);
}
getAndPrintHTML(requestOptions, printHTML)
