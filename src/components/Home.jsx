import React from 'react'
import myImage from "../assets/truongava.png"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center mt-16 h-full'>
                <h2 className='text-4xl sm:text-5xl font-bold text-white'>What's up! I'm Truong.</h2>
                <p className='text-gray-400 py-3 text-xl max-w-md' align='justify'>I am a junior who is studying Computer Science at the New Jersey Institute of Technology.</p>
                <p className='text-gray-400 py-3 text-xl max-w-md' align='justify'>I'm looking for a Software Engineering Internship to help me improve my skills and earn technical experience, especially full-stack or back-end, which are my passion.</p>
                <div>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-sky-400 to-blue-500 cursor-pointer hover:scale-105 duration-100'>
                        Portfolio
                         <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                         </span>      
                    </Link>
                </div>
            </div>
            <div className='mx-16'>
                <img src = {myImage} alt="my profile" className='rounded-3xl mx-auto h-80 w-80 object-scale-down'/>
            </div>
        </div>
    </div>
  
  )
}

export default Home