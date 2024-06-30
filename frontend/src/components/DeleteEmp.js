import React from 'react';
import "./form.css"
import { useNavigate } from 'react-router-dom';

const DeleteEmp = ({ employee, onDelete }) => {
    const navigate=useNavigate();
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/deleteEmp/${employee.Id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                onDelete(employee.Id);
                console.log('Employee deleted successfully');
                navigate("/Employee")
            } else {
                console.error('Failed to delete employee');
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div className="delete-container" >
            
            <button onClick={handleDelete} className="form-submit delete-button">Delete</button>
        </div>
    );
};

export default DeleteEmp;
