import React, { useState } from 'react';
import './Navbar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltips from '../UI/Tooltips';
import { useUserAuth } from '../../context/UserAuthContext';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();
    const logOutHandler = async () =>{
        try{
            await logOut();
            localStorage.removeItem("LoggedUser")
            navigate('/');
        }catch (err){
            console.log(err.message);
        }
    }
    return (
        <div className="Navbar">
            <div className='top'>
                <div className='logo'><img src='https://firebasestorage.googleapis.com/v0/b/edtech-web-8a059.appspot.com/o/ProfileImages%2Flogo512.png?alt=media&token=1aa190fc-6d4b-4f47-82b5-d8e163c3d93c' alt='' /></div>
            </div>
            <div className='center'>
                <ul className='NavItems'>
                    <li>
                        <Link to="/home/dashboard">
                            <Tooltips title="Dashboard"><DashboardIcon /></Tooltips>
                        </Link>
                    </li>
                    <li >
                        <Link to="/home/courses">
                            <Tooltips title="Courses"><YouTubeIcon /></Tooltips>
                        </Link>
                    </li>
                    <li >
                        <Link to="/home/materials">
                            <Tooltips title="Materials"><MenuBookIcon /></Tooltips>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home/settings">
                            <Tooltips title="Settings"><SettingsIcon /></Tooltips>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='bottom' onClick={logOutHandler}>
                <Tooltips title="Log Out"><LogoutIcon /></Tooltips>
            </div>
        </div>
    );
}

export default Navbar;