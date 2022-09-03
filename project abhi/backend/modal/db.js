const mysql =require("mysql")

const connection = mysql.createConnection({
 host:"localhost",
 user:"root",
 password:"",
 database:"Project",
})

connection.connect((err,res)=>{
  if (err){
    console.log({err:err.sqlMessage})
  }
  console.log("database connected")

})
module.exports ={connection}