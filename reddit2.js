var http = require('http');

var reddit = require('./reddit')

http.createServer(function (req, res) {
  var html = buildHtml(req);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length,
    'Expires': new Date().toUTCString()
  });
  res.end(html);
}).listen(8080);

function buildHtml(req) {
  var header = reddit.outcome;
  var body = ' birthday';

  // concatenate header string
  // concatenate body string

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};
