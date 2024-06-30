const {poolPromise,sql}= require("../config/dbconnection");

const createEmployee = async (req, res) => {
    try {
        
        const { EmployeeName, Address, City, PinCode, State, Country, DateOfBirth, FatherName, MotherName, Department, Designation, PanNo, AadharNo, IsdCode, StdCode, Phone1, Phone2, MobileNo, FaxNo, EmailId, UpdatedBy } = req.body;

        const pool = await poolPromise;

        const result=await pool.request()
            .input('EmployeeName', sql.VarChar, EmployeeName)
            .input('Address', sql.VarChar, Address)
            .input('City', sql.VarChar, City)
            .input('PinCode', sql.VarChar, PinCode)
            .input('State', sql.VarChar, State)
            .input('Country', sql.VarChar, Country)
            .input('DateOfBirth', sql.Date, DateOfBirth ? new Date(DateOfBirth) : null)
            .input('FatherName', sql.VarChar, FatherName)
            .input('MotherName', sql.VarChar, MotherName)
            .input('Department', sql.VarChar, Department)
            .input('Designation', sql.VarChar, Designation)
            .input('PanNo', sql.VarChar, PanNo)
            .input('AadharNo', sql.VarChar, AadharNo)
            .input('IsdCode', sql.VarChar, IsdCode)
            .input('StdCode', sql.VarChar, StdCode)
            .input('Phone1', sql.VarChar, Phone1)
            .input('Phone2', sql.VarChar, Phone2)
            .input('MobileNo', sql.VarChar, MobileNo)
            .input('FaxNo', sql.VarChar, FaxNo)
            .input('EmailId', sql.VarChar, EmailId)
            .input('UpdatedBy', sql.VarChar, UpdatedBy)
            .query(`
        INSERT INTO EmployeeData
        (EmployeeName, Address, City, PinCode, State, Country, DateOfBirth, FatherName, MotherName, 
         Department, Designation, PanNo, AadharNo, IsdCode, StdCode, Phone1, Phone2, MobileNo, 
         FaxNo, EmailId, UpdatedBy) 
         OUTPUT inserted.EmployeeId
        VALUES (@EmployeeName, @Address, @City, @PinCode, @State, @Country, @DateOfBirth, @FatherName, 
                @MotherName, @Department, @Designation, @PanNo, @AadharNo, @IsdCode, @StdCode, 
                @Phone1, @Phone2, @MobileNo, @FaxNo, @EmailId, @UpdatedBy)
      `);
        const EmployeeId=result.recordset[0].EmployeeId;
        res.status(201).json({ EmployeeId});
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports={createEmployee};
