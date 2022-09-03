const express =require("express");
const cors =require("cors");
const { emproutes } = require("./route/employee/employee.route");
const {connection}=require("./modal/db");
const { adminRoutes } = require("./route/admin/admin.routes");

 
const app = express();

app.use(express.json());

app.use(cors()); //as a middleware

app.use("/",emproutes);

//admin

app.use("/admin",adminRoutes);

app.listen(4000, () => {
  console.log("server created");
});
