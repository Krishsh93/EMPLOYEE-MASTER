import React from 'react'
import "./form.css"


const Form = ({formData,changeHandler,submitHandler,name,BirthDate,title}) => {
    console.log(name)
    const formattedName = name ? name.replace(/['"]+/g, '') : '';
    const handleSubmit = (e) => {
        e.preventDefault();
        submitHandler(e, formData.EmployeeName,formattedName); 
    };
    
    
    
  return (
    <div className="edit-emp-form-container">
            <form onSubmit={handleSubmit} className="edit-emp-form">
                <h2 className="form-title">{title}</h2>

                <label className="form-label">Employee Name*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="EmployeeName"
                    value={formData.EmployeeName || ''}
                    required
                    
                />

                <label className="form-label">Address*</label>
                <textarea
                    name="Address"
                    className="form-textarea"
                    onChange={changeHandler}
                    value={formData.Address || ''}
                    required
                ></textarea>

                <label className="form-label">City*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="City"
                    value={formData.City || ''}
                    required
                />

                <label className="form-label">Pin Code*</label>
                <input
                    type="number"
                    className="form-input"
                    onChange={changeHandler}
                    name="PinCode"
                    value={formData.PinCode || ''}
                    required
                />

                <label className="form-label">State*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="State"
                    value={formData.State || ''}
                    required
                />

                <label className="form-label">Country*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Country"
                    value={formData.Country || ''}
                    required
                />

                <label className="form-label">Date of Birth*</label>
                <input
                    type="date"
                    className="form-input"
                    onChange={changeHandler}
                    name="DateOfBirth"
                    value={BirthDate}
                    required
                />

                <label className="form-label">Father Name</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="FatherName"
                    value={formData.FatherName || ''}
                    
                />

                <label className="form-label">Mother Name</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="MotherName"
                    value={formData.MotherName || ''}
                    
                />

                <label className="form-label">Department</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Department"
                    value={formData.Department || ''}
                    
                />

                <label className="form-label">Designation</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Designation"
                    value={formData.Designation || ''}
                    
                />

                <label className="form-label">PAN No*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="PanNo"
                    value={formData.PanNo || ''}
                    required
                />

                <label className="form-label">Aadhar No*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="AadharNo"
                    value={formData.AadharNo || ''}
                    required
                />

                <label className="form-label">ISD Code</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="IsdCode"
                    value={formData.IsdCode || ''}
                    
                />

                <label className="form-label">STD Code</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="StdCode"
                    value={formData.StdCode || ''}
                />

                <label className="form-label">Phone1</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Phone1"
                    value={formData.Phone1 || ''}
                />

                <label className="form-label">Phone2</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Phone2"
                    value={formData.Phone2 || ''}
                />

                <label className="form-label">Mobile No.*</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="MobileNo"
                    value={formData.MobileNo || ''}
                    required
                />

                <label className="form-label">FAX No</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="FaxNo"
                    value={formData.FaxNo || ''}
                />

                <label className="form-label">Email ID*</label>
                <input
                    type="email"
                    className="form-input"
                    onChange={changeHandler}
                    name="EmailId"
                    value={formData.EmailId || ''}
                    required
                />

                <label className="form-label">Updated By</label>
                <input
                    type="text"
                    className="form-input"
                    name="UpdatedBy"
                    value={formattedName}
                    readOnly
                />

                {/* <label className="form-label">Updated At</label>
                <input
                    type="datetime-local"
                    className="form-input"
                    onChange={changeHandler}
                    name="UpdatedAt"
                    value={formData.UpdatedOn || ''}
                /> */}

                <input
                    type="submit"
                    value="Save and Next"
                    className="form-submit"
                />
            </form>
        </div>
  )
}

export default Form
