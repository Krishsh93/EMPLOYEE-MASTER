import React from 'react'
import { useState } from "react"


import { useLocation } from 'react-router-dom';
import Form from "./Form"
import DocUpload from './DocUpload';
const CreateForm = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    
    const initialFormData = {
        EmployeeName: "",
        Address: "",
        City: "",
        PinCode: "",
        State: "",
        Country: "",
        DateOfBirth: "",
        FatherName: "",
        MotherName: "",
        Department: "",
        Designation: "",
        PanNo: "",
        AadharNo: "",
        IsdCode: "",
        StdCode: "",
        Phone1: "",
        Phone2: "",
        MobileNo: "",
        FaxNo: "",
        EmailId: "",
        UpdatedBy: ""
    }

    const [formData, setFormData] = useState({ ...initialFormData });

    // console.log(formData);
    
    const [showUploadDoc,setShowUploadDoc]=useState(false)
    const [EmployeeId,setEmployeeId]=useState('')
    const [EmployeeName,setEmployeeName]=useState('')
    const [adminName,setAdminName]=useState('')
    
    function changeHandler(event) {
        const { name, value, } = event.target;
        setFormData((prevFormData) => {
            // console.log(prevFormData);
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    const submitHandler = async (e, EmployeeName,formattedName) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/createEmp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Success:", data);
            console.log(data.EmployeeId);
            setAdminName(formattedName)
            
            
            setShowUploadDoc(true);
            setEmployeeName(EmployeeName);
            setEmployeeId(data.EmployeeId);
    
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const title="Create Employee"
        
    


    return (
        <div className="App">
            {showUploadDoc ? (
                
                <DocUpload changeHandler={changeHandler} EmployeeId={EmployeeId} EmployeeName={EmployeeName} name={name}/>
            ) : (<Form formData={formData} changeHandler={changeHandler} submitHandler={submitHandler} name={name} title={title} />
            )
            }
        </div>
    );
}

export default CreateForm
