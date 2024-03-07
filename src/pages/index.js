import React from "react";
import Hero from "../components/HeroSection";
import FtMovieBanner from "../components/FeaturedMovies";
import FtTvBanner from "../components/FeaturedTV";
import { staticbanner1, staticbanner2 } from "../images";

 
const Homepage = () => {
    return (
        <div>
            <Hero />

            <FtMovieBanner />        
            <FtTvBanner />

            <div>
                <img src={staticbanner1} alt="Banner 1" />
            </div>
            <div>
                <img src={staticbanner2} alt="Banner 2" />
            </div>

        </div>
    );
};
 
export default Homepage;