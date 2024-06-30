const { poolPromise, sql } = require("../config/dbconnection");


const passUpdate =async(req,res)=>{
    try {
        const pool = await poolPromise;
        const { Username, OldPassword, NewPassword } = req.body;
    
        
        const result = await pool.request()
          .input('Username', sql.VarChar, Username)
          .input('OldPassword', sql.VarChar, OldPassword)
          .query('SELECT * FROM UserDetails WHERE Username = @Username AND Password = @OldPassword');
    
        if (result.recordset.length === 0) {
          return res.status(404).json({ message: 'Incorrect old password' });
        }
    
        
        await pool.request()
          .input('Username', sql.VarChar, Username)
          .input('NewPassword', sql.VarChar, NewPassword)
          .query('UPDATE UserDetails SET Password = @NewPassword WHERE Username = @Username');
    
        res.status(200).json({ message: 'Password reseted' });
      } catch (err) {
        res.status(500).send('Internal server error');
        console.log(err);
      }
    }
module.exports={passUpdate}
