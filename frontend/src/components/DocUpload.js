import React, { useState } from 'react'
import Home from './home'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./form.css"

const DocUpload = ({EmployeeName,EmployeeId,name}) => {
    const [file,setFile]=useState('')
    const [documentType,setDocumentType]=useState('')
    const [showSuccess,setShowSucces]=useState(false)
    const docUploader = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('EmployeeName', EmployeeName);
            formData.append('EmployeeId', EmployeeId);
            formData.append('DocumentType', documentType);

            const response = await fetch("http://localhost:5000/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Success:", data);
            setShowSucces(true)
            toast.success("Employee created Successfuly")

        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    return (
        <div className="edit-emp-form-container">
            {showSuccess?(<Home name={name}/>):(
                <form onSubmit={docUploader} className="edit-emp-form">
                <h2 className="form-title">Upload Documents</h2>

                <label className="form-label">Employee Id</label>
                <input
                    type="text"
                    className="form-input"
                    
                    name="EmployeeId"
                    value={EmployeeId}
                    required
                    readOnly

                />
                <br />
                <label className="form-label">Employee Name</label>
                <input
                    type="text"
                    className="form-input"
                    
                    name="EmployeeName"
                    value={EmployeeName}
                    required
                    readOnly

                />
                <br />
                <label className="form-label">Upload Document*</label>
                <input 
                    type="file"
                    onChange={(e)=>setFile(e.target.files[0])}
                    name="file"
                />
                
                <label className="form-label">Select Document*</label>
                <select
                    className="form-input"
                    name="Department"
                    onChange={(e)=>setDocumentType(e.target.value)}
                    value={ documentType || ''}
                    required
                >
                    <option value="" disabled>Select Department</option>
                    <option value="AadharCard">Aadhar Card</option>
                    <option value="PanCard">Pan Card</option>
                    <option value="PassportPhoto">PassportPhoto</option>
                    
                    
                </select>
                <br/>
                <input
                    type='submit'
                    value="Submit"
                    className="form-submit"
                    

                />



            </form>
            )}
            
            
        </div>
    )
}

export default DocUpload
