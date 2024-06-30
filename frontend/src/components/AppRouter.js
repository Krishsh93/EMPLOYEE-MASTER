import React from 'react'
import { Routes, Route, Router} from "react-router-dom";
import Employees from "./employees";
import CreateForm from "./createForm";
import Home from './home';
import Login from './login';
import Forgot from './forgot';
import Query from './query';


const AppRouter = () => {
  return (
    <div>
      
        
          <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Enquiry" element={<Query/>} />

          <Route path="/create" element={<CreateForm />} />
          <Route path="/Employee" element={<Employees />} />
          <Route path="/forgot" element={<Forgot />} />
          {/* <Route component={NotFound} /> */}
          </Routes>
        

          

        
      

    </div>
  )
}

export default AppRouter
