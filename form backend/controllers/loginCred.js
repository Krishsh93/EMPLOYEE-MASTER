const { poolPromise, sql } = require("../config/dbconnection");


const loginCred = async (req, res) => {
    try {
        const pool = await poolPromise;
        const { Username, Password } = req.body;

        
        const result = await pool.request()
            .input('Username', sql.VarChar, Username)
            .input('Password', sql.VarChar, Password)
            .query(`SELECT Name FROM UserDetails WHERE Username=@Username AND Password=@Password`);

        if (result.recordset.length > 0) {
            res.status(200).json(result.recordset[0]); 
        } else {
            res.status(404).json({ message: "Enter correct credentials" });
        }
    } catch (err) {
        res.status(500).send("Internal Server Error");
        console.error(err);
    }
};

module.exports = { loginCred };
