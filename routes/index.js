const routes = require("express").Router();
const lesson1Controller = require("../controllers/lesson1");
 
routes.get("/", lesson1Controller.byeRoute);
routes.get("/hello", lesson1Controller.helloRoute);

module.exports = routes;