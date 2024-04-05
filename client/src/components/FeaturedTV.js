import React from "react";
import { Link } from "react-router-dom";

const FtTvBanner = (props) => {

    return (
        <div className="float-left w-full">
            <div className="mx-8 mt-8 mb-5 text-2xl font-bold font-sans">Featured TV Shows</div>
            <div className="float-left w-full flex justify-center mb-5">
            <div className="float-left grid grid-cols-8">
                {props.shows.map((show) => 
                    <div>
                        <Link to={`/showsdesc/${show.id}`}><img className="h-[316px] w-[204px] m-2" key={show.id} src={show.poster} alt={show.title} /></Link>
                    </div>
                )}
                
            </div>
            </div>
        </div>
    );

}

export default FtTvBanner;