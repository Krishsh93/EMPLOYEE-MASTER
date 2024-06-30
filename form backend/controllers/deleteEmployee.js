const {poolPromise,sql}= require("../config/dbconnection");

const deleteEmployee = async (req, res) => {
    try {
      const pool = await poolPromise;
      const id = req.params.id; 
  
      const result = await pool.request()
        .input('id', sql.Int, id)
        .query(`DELETE FROM EmployeeData WHERE Id = @id`);
  
      res.status(200).json(result.recordset);
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
}
module.exports={deleteEmployee};
