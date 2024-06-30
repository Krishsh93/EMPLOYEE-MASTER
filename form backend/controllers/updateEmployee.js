const { poolPromise, sql } = require("../config/dbconnection");

const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const { EmployeeName, Address, City, PinCode, State, Country, DateOfBirth, FatherName, MotherName, Department, Designation, PanNo, AadharNo, IsdCode, StdCode, Phone1, Phone2, MobileNo, FaxNo, EmailId, UpdatedBy } = req.body;

        const pool = await poolPromise;

        await pool.request()
            .input('Id', sql.Int, id)
            .input('EmployeeName', sql.VarChar, EmployeeName)
            .input('Address', sql.VarChar, Address)
            .input('City', sql.VarChar, City)
            .input('PinCode', sql.VarChar, PinCode)
            .input('State', sql.VarChar, State)
            .input('Country', sql.VarChar, Country)
            .input('DateOfBirth', sql.Date,  DateOfBirth ? new Date(DateOfBirth) : null)
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
                UPDATE EmployeeData
                SET EmployeeName = @EmployeeName, Address = @Address, City = @City, PinCode = @PinCode, 
                    State = @State, Country = @Country, DateOfBirth = @DateOfBirth, FatherName = @FatherName, 
                    MotherName = @MotherName, Department = @Department, Designation = @Designation, 
                    PanNo = @PanNo, AadharNo = @AadharNo, IsdCode = @IsdCode, StdCode = @StdCode, 
                    Phone1 = @Phone1, Phone2 = @Phone2, MobileNo = @MobileNo, FaxNo = @FaxNo, 
                    EmailId = @EmailId, UpdatedBy = @UpdatedBy,UpdatedOn=GETDATE()
                WHERE Id = @Id
            `);

        res.status(200).json({ message: "Employee updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { updateEmployee };
