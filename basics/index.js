const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Listening on port 300");
  console.log("Visit http://localhost:3000");
});

let requestCount = 0;

app.get("/", (request, response) => {
  console.log("Requesting homepage", request.url);
  requestCount++;
  response.send(
    `
    <h1>Hello World</h1>
    <h2>Request Count : ${requestCount}</h2>
    `
  );
});
