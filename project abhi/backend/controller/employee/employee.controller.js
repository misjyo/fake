const { connection } = require("../../modal/db");

const getAllEmployee = async (req, res) => {
  try {
    const q1 = "SELECT *FROM employee";
    await connection.query(q1, (err, result) => {
      if (err) {
       return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const q1 = "SELECT *FROM employee WHERE emp_id = ?";
    await connection.query(q1, [req.params.emp_id], (err, result) => {
      if (err) {
      return  res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }
};
const postEmployee = async (req, res) => {
  try {
    const q1 = "INSERT INTO employee SET ?";
    const data = req.body;
    await connection.query(q1, data, (err, result) => {
      if (err) {
       return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }
};
const putEmployee = async (req, res) => {
  try {
    const q1 = "UPDATE employee SET ? WHERE emp_id =?";
    const data = req.body;
    await connection.query(q1, [data, req.params.emp_id], (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const q1 = "DELETE FROM employee WHERE emp_id =?";
    const data = req.params.emp_id;
    await connection.query(q1, data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage });
      }
      res.json({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ Error: err.message });
  }
};
module.exports = {
  getAllEmployee,
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
};
