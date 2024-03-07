import React from 'react';
import { Link } from 'react-router-dom';
import { metubelogo } from '../images';

const Navbar = () => {

    return (
        <nav class="bg-blue-900 float-left w-full h-24">
            <ul class="align-middle">
                <li><Link to="/"><button class="text-white hover:bg-blue-950 float-left font-bold font-sans px-12 py-5"><img class="object-scale-down h-14 w-20" src={metubelogo} alt={"site logo"}/></button></Link></li>
                <li><Link to="/showslist"><button class="text-white hover:bg-blue-950 float-left font-bold font-sans px-8 py-9">Movies & TV Shows</button></Link></li>
                <li><Link to="/login"><button class="text-white hover:bg-blue-950 float-right font-bold font-sans px-8 py-9">Log in</button></Link></li>
                <li><Link to="/signup"><button class="text-white hover:bg-blue-950 float-right font-bold font-sans px-8 py-9">Sign Up</button></Link></li>
            </ul>
        </nav>  
    )
}

export default Navbar