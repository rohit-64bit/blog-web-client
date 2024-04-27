import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function carousel ({ 
    children: slides,
    autoSlide = false,
    autoSlideInterval = 4000 
}) {

    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr(
            (curr) => (curr == 0 ? slides.length-1 : curr-1)
        )
    
    const next = () =>
        setCurr(
            (curr) => (curr == slides.length-1 ? 0 : curr+1)
        )
    
    useEffect(() => {
        if(!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        
        <div className="relative overflow-hidden">
            
            {/* Slides */}
            <div 
                className="max-h-[250px] w-full flex transition-transform ease-out duration-500" 
                style={{transform: `translateX(-${curr*100}%)`}}
            > 
                {slides} 
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
               
                <button onClick={prev} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
                   <FaChevronLeft/>
                </button>
               
                <button onClick={next} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
                    <FaChevronRight/>
                </button>

            </div>

            {/* Indecators */}
            <div className="absolute bottom-4 left-0 right-0 mx-auto max-w-[70px]">

                <div className="flex items-center justify-between">
                    {
                        slides.map((_, i) => (
                            <div key={i} className={'transition-all w-2.5 h-2.5 bg-white rounded-full ${curr == i ? "p-2" : "bg-opacity-50"}'}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}
