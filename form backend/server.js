const express=require("express");
const router=require("./routes/route");
const bodyparser=require("body-parser");
const cors=require("cors")
const path = require('path');


const app=express();
const {poolPromise,sql}= require("./config/dbconnection")
app.use(express.json());
app.use(cors());
require("dotenv").config();
const port=process.env.PORT || 4000;
app.use(bodyparser.urlencoded({extended: true}));

app.listen(port,()=>{
    console.log(`server has started on port ${port}`);
});
app.use("/api",router);
app.get("/",async (req,res)=>{
    const pool =await poolPromise;
    res.send("hello")
})
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


