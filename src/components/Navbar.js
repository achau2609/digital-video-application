import React from 'react';
import { Link } from 'react-router-dom';
import { metubelogo } from '../images';

const Navbar = () => {

    return (
        <nav class="bg-blue-900 float-left w-full h-24">
            <ul class="align-middle">
                <li class="text-white float-left px-12 py-5 hover:bg-blue-950 font-bold font-sans"><Link to="/"><img class="object-scale-down h-14 w-20" src={metubelogo} alt={"site logo"}/></Link></li>
                <li class="text-white float-left px-8 py-9 hover:bg-blue-950 font-bold font-sans"><Link to="/showslist">Movies & TV Shows</Link></li>
                <li class="text-white float-right px-8 py-9 hover:bg-blue-950 font-bold font-sans"><Link to="/login">Log in</Link></li>
                <li class="text-white float-right px-8 py-9 hover:bg-blue-950 font-bold font-sans"><Link to="/signup">Sign Up</Link></li>
            </ul>

         
        </nav>  
    )
}

export default Navbar