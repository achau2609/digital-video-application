import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const ShowsList = () => {

    const [shows, setShows] = useState([]);
    useEffect(() => {
        fetch('http://18.225.235.13:5000/showslist', {
            method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
            if(data.body) {
                setShows(data.body)
            } 
            else setShows([])
        });

    }, [])

    function updateResults(query) {
        fetch(`http://18.225.235.13:5000/showslist/search?q=${query}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
            if(data.body) {
                setShows(data.body)
            } 
            else setShows([])
        });
    } 

    
    return (
        <div className="bg-blue-200 float-left w-full">
            <div className="float-left w-full flex justify-center text-center font-bold font-sans text-4xl py-10">Movies and TV Shows</div>
            <div className="float-left w-full m-4 font-sans flex justify-center pb-5">
                    <input className="rounded-md h-14 w-[60%] px-5 placeholder:text-slate-300 placeholder:p-5 placeholder:text-base placeholder:align-middle" placeholder="Type to search" type="text" onChange={e => updateResults(e.target.value)}/>
            </div>

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