import React, { useContext } from "react";
import Hero from "../components/HeroSection";
import FtMovieBanner from "../components/FeaturedMovies";
import FtTvBanner from "../components/FeaturedTV";
import { servicebanner } from "../images";
import ShowsContext from "../context/ShowsContext";

 
const Homepage = () => {

    const shows = useContext(ShowsContext).shows;
    const movies = shows.filter((e) => e.category === "movie");
    const tv = shows.filter((e) => e.category === "tv");

    return (
        <div className="bg-blue-200 float-left w-full">
            <Hero />

            <FtMovieBanner shows={movies} />        
            <FtTvBanner shows={tv} />

            <div>
                <img src={servicebanner} alt="Banner 1" />
            </div>

        </div>
    );
};
 
export default Homepage;