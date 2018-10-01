var getHTML = require('./functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function toUpperCase(html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, toUpperCase);
