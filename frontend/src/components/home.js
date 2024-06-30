import React from 'react';
import { Link } from 'react-router-dom';
import './form.css'; // Assuming you have defined your CSS styles in form.css

const Home = ({ name }) => {
  
  const nameString = JSON.stringify(name.Name);
  return (
    <div className='edit-emp-form-container '>
      <Link to={`/create?name=${encodeURIComponent(nameString)}`} style={{ textDecoration: 'none' }}>
        <button className="form-submit">Create Employee</button>
      </Link>
      <Link to={`/Employee?name=${encodeURIComponent(nameString)}`} style={{ textDecoration: 'none' }}>
        <button className="form-submit">Get All Employees</button>
      </Link>
      <Link to="/Enquiry">
        <button className="form-submit">Send Enquiry</button>
      </Link>
    </div>
  );
};

export default Home;
