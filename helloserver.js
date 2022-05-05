// var fs = require('fs');
// var path = require('path');
// var guestsPath = path.join(__dirname, 'guests.json');

// var http = require('http');
// var port = process.env.PORT || 8000;

// var server = http.createServer(function(req, res) {
//   if (req.method === 'GET' && req.url === '/guests') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestsJSON);
//     });
//   }
//   else if (req.method === 'GET' && req.url === '/guests/0') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       var guests = JSON.parse(guestsJSON);
//       var guestJSON = JSON.stringify(guests[0]);

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestJSON);
//     });
//   }
//   else if (req.method === 'GET' && req.url === '/guests/1') {
//     fs.readFile(guestsPath, 'utf8', function(err, guestsJSON) {
//       if (err) {
//         console.error(err.stack);
//         res.statusCode = 500;
//         res.setHeader('Content-Type', 'text/plain');
//         return res.end('Internal Server Error');
//       }

//       var guests = JSON.parse(guestsJSON);
//       var guestJSON = JSON.stringify(guests[1]);

//       res.setHeader('Content-Type', 'application/json');
//       res.end(guestJSON);
//     });
//   }
//   else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Not found');
//   }
// });

// server.listen(port, function() {
//   console.log('Listening on port', port);
// });

var http   = require('http');
var routes = require('./routes');

var handleRequest = function (req, res) {
  if(routes[req.url] !== undefined) {
    routes[req.url](req, res);
  } else {
    res.end("404, no such route");
  }
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("Listening...");
});