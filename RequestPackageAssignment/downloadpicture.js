var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err){
    throw err;
  })
  .on('response', function (response){
    console.log('Response Status Code: ' + response.statusCode + " Content Type " + response.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function(){
    console.log('Download complete.');             // Note 4
  });
    console.log('Downloading image...');
