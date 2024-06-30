import React, { useEffect, useState } from 'react';
import DeleteEmp from './DeleteEmp';
import EditEmp from './EditEmp.js';
import { useLocation } from 'react-router-dom';
import "./form.css"

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [editEmployee, setEditEmployee] = useState(null);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');

    useEffect(() => {
        fetch("http://localhost:5000/api/getEmp")
            .then((response) => response.json())
            .then((data) => {
                setEmployees(data);
                console.log('Fetched data:', data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleDelete = (deletedEmployeeId) => {
        setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.EmployeeID !== deletedEmployeeId)
        );
    };

    const handleEdit = (employee) => {
        setEditEmployee(employee);
        console.log('Editing employee:', employee);
    };

    const handleSave = (updatedEmployee) => {
        setEmployees((prevEmployees) =>
            prevEmployees.map((employee) =>
                employee.Id === updatedEmployee.Id ? updatedEmployee : employee
            )
        );
        setEditEmployee(null); // Close edit form after saving
    };

    return (
        <div>

            {editEmployee ? (
                // console.log(editEmployee)
                <EditEmp employee={editEmployee} onSave={handleSave} name={name}></EditEmp>
            ) : (
                <div>
                    <h1>Employee List</h1>
                    {employees.map((employee) => (
                        <div key={employee.Id} className='employee-detail'>

                            <h2>{employee.EmployeeId}</h2>
                            <h2>{employee.EmployeeName}</h2>
                            <h2>{employee.Status}</h2>
                            <div className="button-container">
                                <button onClick={() => handleEdit(employee)} className="form-submit edit-button">Edit</button>
                            </div>

                            <DeleteEmp employee={employee} onDelete={handleDelete} />
                        </div>
                    ))}
                </div>)}
        </div>
    );
};

export default Employees;
