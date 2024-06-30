const {poolPromise,sql}= require("../config/dbconnection");




const uploadDocument = async (req, res) => {
    try {
        
        const { EmployeeName,EmployeeId ,DocumentType } = req.body;
        const FilePath=req.file.path
        


        const pool = await poolPromise;

        const result=await pool.request()
            .input('EmployeeName', sql.VarChar, EmployeeName)
            .input('EmployeeId', sql.VarChar,EmployeeId )
            .input('PathFile', sql.VarChar, FilePath)
            .input('DocumentType',sql.VarChar, DocumentType)
            .query(`
        INSERT INTO UploadedDocument
        (EmployeeName, EmployeeId,PathFile,DocumentType) 
         
        VALUES (@EmployeeName, @EmployeeId,@PathFile,@DocumentType)
      `);
        
        res.status(201).json({ message:"successful"});
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports={uploadDocument};
