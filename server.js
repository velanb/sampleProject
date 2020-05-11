const express = require("express");
const http = require("http");
const app = express();
// Import Modules
let sumModule = require("./src/modules/routes");

const server = http.createServer(app);
const PORT = 3000;

app.use("/api", sumModule);

// Listening to the server
server.listen(PORT, () => {
  console.log("APP is up");
});
