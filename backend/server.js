const http = require("http");
const app = require("./app");

const port = process.env.PORT || 4001;

const server = http.createServer(app);

server.listen(port);
server.on("error", err => {
    console.log(err.message);
});
server.on("listening", () => {
    console.log("Express is listening on " + port);
});
