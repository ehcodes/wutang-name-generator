//gives network access - enables ability to handle all http methods
const http = require('http');
//file access
const fs = require('fs')
//url access
const url = require('url');

let querystring = require('querystring');

const figlet = require('figlet')

//server creation
const server = http.createServer(function(req, res) {
  //parsing url and storing it as a variable

  //conditionals checking what the request url was homepage
  const page = url.parse(req.url).pathname;

  let params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });//conditionals checking what the request url was "otherpage.html"
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });//makes it so the server knows where to fetch js
  }else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{

    console.log('err')
  }
});

server.listen(8000);

// app.post('/quotes', (req, res) => {
// console.log(req.body)
// })
