var getHTML = require('./functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
