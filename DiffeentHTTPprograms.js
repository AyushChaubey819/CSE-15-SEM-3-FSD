// write a node.js program to create  a basic HTTP server that handles different URL routes .

// the server should : 
// DIsplay "Home Page"  when the user visits /.
// Display "About Page" when the user visits / about.
// Return a 404 status code and display "Page not Found" for any invalid URL .
// Provide a link to return to the Home Page on the 404 page.
// Run the server on port 3000

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } 
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
      <h1>Page not Found</h1>
      <a href="/">Return to Home Page</a>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
