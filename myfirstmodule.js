exports.add = function (a, b) {
    return a + b;
}
exports.subtract = function (a, b) {
    return a - b;
}
exports.multiply = function (a, b) {
    return a * b;
}
exports.divide = function (a, b) {
    return a / b;
}
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
exports.myDateTime = function() {
    return Date();
};

import('upper-case').then(uc => {
  
    http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(uc.upperCase("Hello World!"));
      res.end();
    }).listen(8081);
  }).catch(err => {
    // Handle any potential errors during the import
    console.error('Error during dynamic import:', err);
  });
  