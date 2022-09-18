import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import ProtectedRoutes from "./Entry/Login/ProtectedRoutes";
import Settings from "./Settings/Settings";
import Navbar from "./navbar/Navbar";
import Dashboard from './Dashboard/Dashboard';
import CoursesMain from './Courses/CoursesMain';
import Materials from './Materials/MaterialMain';
import './Compile.css'


const Compile = () => {
    return(
        <div className="Compile">
            <Navbar/>
            <div className="MainComponent">
                <Routes>
                    <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>}/>
                    <Route path="/courses" element={<ProtectedRoutes><CoursesMain/></ProtectedRoutes>}/>
                    <Route path="/materials" element={<ProtectedRoutes><Materials/></ProtectedRoutes>}/>
                    <Route path="/settings" element={<ProtectedRoutes><Settings/></ProtectedRoutes>}/>
                </Routes>
            </div>

        </div>
    )
}

export default Compile;