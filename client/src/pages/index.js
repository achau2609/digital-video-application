import React, { useEffect, useState } from "react";
import Hero from "../components/HeroSection";
import FtMovieBanner from "../components/FeaturedMovies";
import FtTvBanner from "../components/FeaturedTV";
import { servicebanner } from "../images";

 
const Homepage = () => {

    const [ftMovies, setFtMovies] = useState([]);
    const [ftTV, setFtTV] = useState([]);

    useEffect(() => {

        fetch('http://18.225.235.13:5000/showslist/featuredmovies', {
            method: 'GET'
        })
            .then(res => res.json())
            .then((data) => {
            if(data.body) {
                setFtMovies(data.body)
            } 
            else setFtMovies([])
        });
        
        fetch('http://18.225.235.13:5000/showslist/featuredtv', {
            method: 'GET'
        })
            .then(res => res.json())
            .then((data) => {
            if(data.body) {
                setFtTV(data.body)
            } 
            else setFtTV([])
        });

      }, []);


    return (
        <div className="bg-blue-200 float-left w-full">
            <Hero />

            <FtMovieBanner shows={ftMovies} />        
            <FtTvBanner shows={ftTV} />

            <div>
                <img src={servicebanner} alt="Banner 1" />
            </div>

        </div>
    );
};
 
export default Homepage;