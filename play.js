const connect = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
// establishes a connection with the game server

setupInput(connect());
