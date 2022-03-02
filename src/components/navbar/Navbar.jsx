import React from 'react';
import './navbar.scss';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbarWrapper">
                <div className="topLeft">
                    <span className='logo'>admin.</span>
                </div>
                <div className="topRight">
                    <div className="iconContainer">
                        <NotificationsNone />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Language />
                        <span className="iconBadge">2</span>
                    </div>
                    <div className="iconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='profilePic'/>
                </div>
            </div>
        </div>
    )
}
