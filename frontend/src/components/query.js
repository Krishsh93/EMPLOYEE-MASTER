import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import "./form.css"


const Query = () => {
    const [formData,setFormData]=useState({
        Name:"",
        EmailId:"",
        Contact:"",
        Address:"",
        Product:"",
        Enquiry:""
    })

    function changeHandler(event) {
        const { name, value, } = event.target;
        setFormData((prevFormData) => {
            
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const response = await fetch('http://localhost:5000/api/Enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                
                toast.success("Enquiry sended successfuly")

            } else {
                alert('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending email');
        }
    };
    return (
        <div className='edit-emp-form-container '>
            
            <form onSubmit={handleSubmit} className="edit-emp-form">
                

                <label className="form-label">Name</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Name"
                    value={formData.Name || ''}
                    placeholder='Enter Your Full Name'
                    required

                />
                <label className="form-label">Email Id</label>
                <input
                    type="email"
                    className="form-input"
                    onChange={changeHandler}
                    name="EmailId"
                    value={formData.EmailId || ''}
                    placeholder='Enter Your Email Id'
                    required

                />
                <label className="form-label">Contact Number</label>
                <input
                    type="number"
                    className="form-input"
                    onChange={changeHandler}
                    name="Contact"
                    value={formData.Contact || ''}
                    placeholder='Enter your Contact Number'
                    required

                />
                <label className="form-label">Address</label>
                <input
                    type="text"
                    className="form-input"
                    onChange={changeHandler}
                    name="Address"
                    value={formData.Address || ''}
                    placeholder='Enter your Address'
                    required

                />
                <label className="form-label">Which product do you want*</label>
                <select
                    className="form-input"
                    name="Product"
                    onChange={changeHandler}
                    value={formData.Product || ''}
                    required
                >
                    <option value="" disabled>Select product</option>
                    <option value="MSchoolErp">MSchool Erp</option>
                    <option value="StudyOn">StudyOn</option>
                    <option value="Other">Other</option>


                </select>

                <label className="form-label">What do you want to know?</label>
                <textarea
                    name="Enquiry"
                    className="form-textarea"
                    onChange={changeHandler}
                    value={formData.Enquiry || ''}
                    placeholder='Write Your Query'

                ></textarea>
                <input
                    type="submit"
                    value="Send Enquiry"
                    className='form-submit'
                
                />

                
            </form>


        </div>
    )
}

export default Query
