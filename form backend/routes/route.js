const express = require("express");
const router = express.Router();
const { createEmployee } = require("../controllers/CreateEmployee");
const { getEmployee,getEmployeeById } = require("../controllers/getEmployee");
const { deleteEmployee } = require("../controllers/deleteEmployee");
const { updateEmployee } = require("../controllers/updateEmployee");
const { loginCred } = require("../controllers/loginCred");
const { passUpdate }=require("../controllers/passUpdate");
const { uploadDocument } = require("../controllers/uploadDocument");
const { SendEnquiry } = require("../controllers/EnquiryController");
const multer = require('multer');

// const upload = multer({ dest: 'uploads/' });
const {upload}=require("../middleware/upload")


router.post("/createEmp", createEmployee);
router.get("/getEmp", getEmployee);
router.get("/getEmp/:id", getEmployeeById);
router.delete("/deleteEmp/:id", deleteEmployee);
router.put("/updateEmp/:id", updateEmployee);
router.post("/login",loginCred);
router.post("/forgot",passUpdate);
router.post("/upload",upload.single('file'),uploadDocument)
router.post("/Enquiry",SendEnquiry);


module.exports = router;
