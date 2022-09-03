const {connection} = require("../../modal/db")

const jwt = require("jsonwebtoken");


let adminRegister = async (req, res) => {
  try {
    let { id,name, email, password } = req.body;

    const data = {  id,name, email, password };
    let sqlQuery = "INSERT INTO admin  SET ?";
    await connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        return res.json({ Error: err.message });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ status: 400, response: err.message });
  }
};

let adminLogin = async (req, res) => {
  try {
    let { email,password } = req.body;
    let sqlQuery = `SELECT * FROM admin WHERE email="${email}"`;
    await connection.query(sqlQuery, async (err, result) => {
      if (err) {
        return res.json({ Error: err.message });
      }
      res.json({ status: 200, response: "logged in succesfully" });
    });
  } catch (err) {
    res.json({ status: 400, response: err.message });
  }
};
module.exports = { adminRegister, adminLogin };
