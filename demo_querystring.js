const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Parse the URL and extract the query parameters
  const parsedUrl = url.parse(req.url, true);
  const query = parsedUrl.query;

  // Extract the values of the 'year', 'month', and 'day' parameters
  const year = query.year;
  const month = query.month;
  const day = query.day;

  // Send the values of the parameters as the response
  res.end(`Year: ${year}, Month: ${month}, Day: ${day}`);
}).listen(8083);
