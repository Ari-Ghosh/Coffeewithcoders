import './Header.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import React from 'react';

const Header = () => {
    return (
        <div className='head'>
            <div className="Greet">
                <span><h2>Welcome Back,</h2></span>
                <span className="User"><h2> Soham</h2></span>
            </div>
            <div className='Icons'>
                <span><NotificationsIcon /></span>
                <span><MessageIcon/></span>
            </div>
        </div>
    )
}

export default Header;