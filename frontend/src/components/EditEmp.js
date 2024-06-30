import React, { useState, useEffect } from 'react';
import Form from "./Form"
import { format } from 'date-fns'

const EditEmp = ({ employee, onSave, name}) => {
    const [formData, setFormData] = useState(employee);
    const formatDate = (isoDate) => {
        return format(new Date(isoDate), 'yyyy-MM-dd'); // or 'MM/dd/yyyy' based on your preference
    };
    const BirthDate=formatDate(formData.DateOfBirth)


    useEffect(() => {
        setFormData(employee);
        console.log(employee)
    }, [employee]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/updateEmp/${employee.Id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                onSave(formData);
                console.log('Employee updated successfully');
            } else {
                console.error('Failed to update employee');
            }
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    if (!formData) return null;
    const title="Edit Employee"

    return (
        <div>
            <Form formData={formData} changeHandler={changeHandler} submitHandler={handleSave} name={name} BirthDate={BirthDate} title={title}/>
        </div>
    );
};

export default EditEmp;
