import React from "react";
import { AiFillLike } from "react-icons/ai";

const cards = () => {
    return(

        <div className="card ">

            <img
                src="https://www.tangolearn.com/wp-content/uploads/2021/09/Best-MERN-Stack-Courses.jpg"
                className=" max-h-[250px]"
            />

            <p className='font-semibold text-lg leading-none mt-4'>How to employee the right MERN stack developer for your project</p>
                
            <div className='flex justify-between text-slate-400 mt-3'>
                
                <p>John Doe</p>
                <div className="flex">
                    <AiFillLike size={20}/>
                    <p>123+</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default cards;