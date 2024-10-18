const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if(req.url==="/"){
    res.end(
        "<h1>This is our main webpage</h1>"
      );
  }
  else if(req.url==="/about"){
    res.end(
        "<h1>This is our about page</h1>"
      );
  }
  res.statusCode = 200; //OK
  res.setHeader("Content-type", "text/html");
  res.end(
    "<h1>This is our http server</h1> <p> Hey this is sanidhya varshney </p>"
  );
});
//console.log(port);

server.listen(port, () => console.log(`Server is running on port ${port}`));
