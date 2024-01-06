const express = require("express");
const { createEmployee, getAllEmployee, updateEmployee, deleteEmployee } = require("../controller/userController.js");

const route = express.Router();

route.post("/createEmployee", createEmployee);
route.get("/getAllEmployee", getAllEmployee);
route.put("/updateEmployee/:id", updateEmployee);
route.delete("/deleteEmployee/:id", deleteEmployee);
module.exports = route;