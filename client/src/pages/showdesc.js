import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
const ShowsDesc = () => {

    const { showId } = useParams();

    const [show, setShow] = useState([]);
    //const show = shows.filter((e) => e.id == Number(showId))[0];

    useEffect(() => {
        fetch(`http://ec2-52-14-130-177.us-east-2.compute.amazonaws.com:5000/showslist/${showId}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then((data) => {
            if(data.body) {
                setShow(data.body[0])
            } 
            else setShow()
        });

    }, [])

    return (
        <>
        
        <div className="bg-blue-200 float-left w-full flex justify-center">
            <div className="z-10 opacity-20 ">
                <img className="object-none object-left h-[730px] w-[730px] absolute right-0" key={show.id} src={show.poster} alt={show.title} />
            </div>
            <div className="w-[65%] z-20">
                <div className="grid grid-cols-2 place-items-center">

                    <div>
                        <img className="h-[474px] w-[306px] my-32" key={show.id} src={show.poster} alt={show.title} />
                    </div>

                    <div className="w-[675px]">
                        <div className=" grid grid-rows-4">
                            <div className="my-1 font-bold font-sans text-5xl">
                                {show.title}
                            </div>
                            <div className="my-1 font-sans text-xl">
                                {show.desc}
                            </div>
                            <div></div>
                            <div className="grid grid-cols-2 place-items-center">
                                <div>
                                    <button className="rounded-full text-2xl bg-blue-400 flex font-sans px-10 py-3 justify-center hover:bg-blue-500">Rent now: ${show.rentalPrice}</button>
                                </div>
                                <div>
                                    <button className="rounded-full text-2xl bg-blue-400 flex font-sans px-10 py-3 justify-center hover:bg-blue-500">Purchase now: ${show.purchasePrice}</button>
                                </div>
                            </div>
                        </div>
                        
                </div>
                
                
                
            </div>
            </div>
        </div>
            
        </>
    );
};
 
export default ShowsDesc;

/**/