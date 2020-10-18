const express = require("express");
const server = express();
const userApi = require("./user_api");

server.use(express.json());

const routes = [
  {
    prefix: "/api",
    target: userApi,
  },
];

for (let route of routes) {
  server.use(route.prefix, route.target);
}

module.exports = server;
