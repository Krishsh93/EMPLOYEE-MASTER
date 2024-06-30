
const sql=require("mssql");

const config = {
    user: "sa",
    password: "Krish@123",
    server: "KRISH-PC",
    database: "EmployeeMaster",
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instanceName: "SQLEXPRESS",
    },
    port: 1433,
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("Connected to SQL Server");
        return pool;
    })
    .catch(err => console.log("Database Connection Failed!", err));
module.exports = {poolPromise,sql};
