var getHTML = require('./functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function toLowerCase(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, toLowerCase)
