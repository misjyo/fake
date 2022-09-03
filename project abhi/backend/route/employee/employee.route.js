const express = require("express");
const emproutes = express.Router();
const {getAllEmployee,getEmployee,postEmployee,putEmployee,deleteEmployee}= require("../../controller/employee/employee.controller");


emproutes.get("/getemp",getAllEmployee);
emproutes.get("/getemp/:emp_id",getEmployee);
emproutes.post("/postemp",postEmployee);
emproutes.put("/putemp/:emp_id",putEmployee);
emproutes.delete("/deleteemp/:emp_id",deleteEmployee);


module.exports ={emproutes}