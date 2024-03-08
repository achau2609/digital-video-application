import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
       <footer className="bg-blue-900 float-left w-full">

                <div className="w-1/4 pt-10 px-20 pb-20 float-left">
                    <p className="text-white p-4 font-bold text-lg">Watch</p>
                    <ul className="text-white">
                        <li className="inline-block cursor-pointer py-2 hover:underline"><Link to="/showslist">Shows</Link></li><br ></br>
                    </ul>
                </div>
                
                <div className="w-1/4 pt-10 px-20 pb-20 float-left">
                    <p className="text-white p-4 font-bold text-lg">My Account</p>
                    <ul className="text-white">
                        <li className="inline-block cursor-pointer py-2 hover:underline">My MeTube</li><br ></br>
                        <li className="inline-block cursor-pointer py-2 hover:underline">Account info</li><br ></br>
                        <li className="inline-block cursor-pointer py-2  hover:underline">Settings</li><br ></br>
                    </ul>
                </div>

                <div className="w-1/4 pt-10 px-20 pb-20 float-left">
                    <p className="text-white p-4 font-bold text-lg">About Us</p>
                    <ul className="text-white">
                        <li className="inline-block cursor-pointer py-2 hover:underline">About Us</li><br ></br>
                        <li className="inline-block cursor-pointer py-2 hover:underline">FAQ</li><br ></br>
                        <li className="inline-block cursor-pointer py-2  hover:underline">Support</li><br ></br>
                        <li className="inline-block cursor-pointer py-2  hover:underline">Contact Us</li><br ></br>
                    </ul>
                </div>               

       </footer>
    )
}

export default Footer