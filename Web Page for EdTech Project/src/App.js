import React from "react";
import './App.css'
import Login from "./components/Entry/Login/Login";
import Signup from "./components/Entry/SignUp/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Compile from "./components/Compile";


function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path='/*' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home/*' element={<Compile />}/>
      </Routes>
    </UserAuthContextProvider >


  );
}

export default App;
