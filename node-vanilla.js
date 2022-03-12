const http = require("http");

//Local file exported
const requestHandler = require("./route");

// To create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html> <body> 
        <form action="/create-user" method="POST"> 
            <input type="text" name="create-user"> </input> 
            <button type="submit">Create User</button>
        </form>
        </body> </html>`);
    res.end();
  }
  if (req.url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", (err) => {
      const rawMsg = Buffer.concat(body).toString();
      const userName = rawMsg.split("=")[1];
      console.log(userName);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><body><ui><li>User1</li><li>User2</li><li>User3</li></ui></body> </html>"
    );
    res.end();
  }
});

// This is to start and listen the server on PORT 4000
server.listen(4000);