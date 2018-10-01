var getHTML = require('./functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function reverse(html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, reverse)
