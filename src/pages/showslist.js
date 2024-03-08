import React, { useContext } from "react";
import ShowsContext from "../context/ShowsContext";
import { Link } from "react-router-dom";
 
const ShowsList = () => {

    const shows = useContext(ShowsContext).shows;

    return (
        <div className="bg-blue-200 float-left w-full">
            <div className="float-left w-full flex justify-center text-center font-bold font-sans text-4xl py-10">Movies and TV Shows</div>
            <div className="float-left w-full flex justify-center mb-20">
            <div className="float-left grid grid-cols-4">
                {shows.map((show) => 
                    
                        <Link to={`/showsdesc/${show.id}`}><img class="h-[474px] w-[306px] m-5" key={show.id} src={show.poster} alt={show.title} /></Link>
                    

                )}
                
            </div>
            </div>
            
        </div>
        
    );
};
 
export default ShowsList;