const http = require("http");
const fs=require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('Content-type','text/html');
  if(req.url==="/"){
    const data=fs.readFileSync("index.html");
    res.statusCode=200;
    res.end(
        data.toString()
      );
  }
  else if(req.url==="/link"){
    const data=fs.readFileSync("link.html");
    res.statusCode=200;
    res.end(
        data.toString()
      );
  }
else{
  res.statusCode=404;
  res.end(
    "<h1>404 not found</h1>"
  );
}
  
});
//console.log(port);

server.listen(port, () => console.log(`Server is running on port ${port}`));
