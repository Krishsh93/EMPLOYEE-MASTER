import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import Employees from "./components/employees";
import {Routes,Route} from "react-router-dom";
import AppRouter from './components/AppRouter';
import { Link } from 'react-router-dom';
import Home from './components/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return(
    <div>
      <AppRouter/>
      
      
      
    </div>
  )
  
}

export default App;
