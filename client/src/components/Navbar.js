import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { metubelogo } from '../images';
import UserContext from '../context/UserContext';

const Navbar = () => {

    const {loginStatus, setLoginStatus, username, setUsername} = useContext(UserContext);
    const navigate = useNavigate();

    const logout = () => {
        alert("Successfully logged out.")
        setLoginStatus(false);
        setUsername("");
        navigate("/")
    }

    return (
        <nav className="bg-blue-900 float-left w-full h-24">
            <ul className="align-middle">
                <li><Link to="/"><button className="text-white hover:bg-blue-950 float-left font-bold font-sans px-12 py-5"><img className="object-scale-down h-14 w-20" src={metubelogo} alt={"site logo"}/></button></Link></li>
                <li><Link to="/showslist"><button className="text-white hover:bg-blue-950 float-left font-bold font-sans px-8 py-9">Movies & TV Shows</button></Link></li>
                {!loginStatus && 
                    <>
                        <li><Link to="/login"><button className="text-white hover:bg-blue-950 float-right font-bold font-sans px-8 py-9">Log in</button></Link></li>
                        <li><Link to="/signup"><button className="text-white hover:bg-blue-950 float-right font-bold font-sans px-8 py-9">Sign Up</button></Link></li>
                    </>   
                }
                {loginStatus && 
                    <>
                        <li><button className="text-white hover:bg-blue-950 float-right font-bold font-sans px-8 py-9" onClick={logout}>Log Out</button></li>
                        <li><Link to="/myaccount"><button className="text-white hover:bg-blue-950 float-right font-bold font-sans px-8 py-9">{username}'s Account</button></Link></li>
                    </>   
                }
                
            </ul>
        </nav>  
    )
}

export default Navbar