import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
       <footer class="bg-blue-900 float-left w-full">

                <div class="w-1/4 pt-10 px-20 pb-20 float-left">
                    <p class="text-white p-4 font-bold text-lg">Watch</p>
                    <ul class="text-white">
                        <li class="inline-block cursor-pointer py-2 hover:underline"><Link to="/movielist">Movies</Link></li><br ></br>
                        <li class="inline-block cursor-pointer py-2 hover:underline"><Link to="/tvlist">TV Shows</Link></li><br ></br>
                    </ul>
                </div>
                
                <div class="w-1/4 pt-10 px-20 pb-20 float-left">
                    <p class="text-white p-4 font-bold text-lg">My Account</p>
                    <ul class="text-white">
                        <li class="inline-block cursor-pointer py-2 hover:underline">My MeTube</li><br ></br>
                        <li class="inline-block cursor-pointer py-2 hover:underline">Account info</li><br ></br>
                        <li class="inline-block cursor-pointer py-2  hover:underline">Settings</li><br ></br>
                    </ul>
                </div>

                <div class="w-1/4 pt-10 px-20 pb-20 float-left">
                    <p class="text-white p-4 font-bold text-lg">About Us</p>
                    <ul class="text-white">
                        <li class="inline-block cursor-pointer py-2 hover:underline">About Us</li><br ></br>
                        <li class="inline-block cursor-pointer py-2 hover:underline">FAQ</li><br ></br>
                        <li class="inline-block cursor-pointer py-2  hover:underline">Support</li><br ></br>
                        <li class="inline-block cursor-pointer py-2  hover:underline">Contact Us</li><br ></br>
                    </ul>
                </div>               

       </footer>
    )
}

export default Footer