import React, { useEffect, useState } from "react";
import { 
    slideshow1,
    slideshow2,
    slideshow3
} from "../images";
 
const Hero = () => {

    const slides = [slideshow1, slideshow2, slideshow3 ];

    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const changeImg = setInterval(() => {
            if(slide === slides.length - 1) setSlide(0);
            else setSlide(slide + 1);
        }, 5000);

        return () => clearInterval(changeImg);  
    })

    return (
        <div className="float-left overflow-hidden relative">
        
            <div className="flex transition ease-out duration-40" style={{transform: `translateX(-${slide * 100}%)`}}>
                {slides.map((s) => {
                    return <img src={s} alt="banners"/>;
                })}
            </div>
            
            <div className="flex w-full justify-center">
                <div className="absolute bottom-0 bg-gray-500 m-3 py-2 px-3 gap-3 flex rounded-full">
                    {slides.map((s,i) => {
                        return (
                            <div
                                onClick={() => {
                                    setSlide(i);     
                                }}
                                className={`rounded-full w-5 h-5 cursor-pointer ${ i === slide ? "hover:bg-orange-300" : "hover:bg-gray-300" } ${ i === slide ? "bg-orange-300" : "bg-white" }`}
                            ></div>
                        )
                    })}
            </div>
            </div>
            
            
        </div>
    );
};
 
export default Hero;