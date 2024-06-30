const {poolPromise,sql}= require("../config/dbconnection");

const getEmployee = async(req,res) => {
    try{
    const pool = await poolPromise;

    const result= await pool.query(`select * from EmployeeData`);
    res.status(200).json(result.recordset);
    }
    catch(err){
        res.status(500).send("internal error")
        console.log(err);

    }
    
  
}




const getEmployeeById = async (req, res) => {
    try {
      const pool = await poolPromise;
      const id = req.params.id; 
  
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query(`SELECT * FROM EmployeeData WHERE EmployeeID = @id`);
  
      res.status(200).json(result.recordset);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
}
  
module.exports={getEmployee,getEmployeeById};

