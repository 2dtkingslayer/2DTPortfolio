import React from 'react'
import ibm from "../assets/portfolio/ibm.png";
import bookstore from "../assets/portfolio/bookstore.png";
import perllike from "../assets/portfolio/perllike.png";
import salesfunnel from "../assets/portfolio/salesfunnel.png";
import covid19BK from "../assets/portfolio/covid19BK.png";
import houseprice from  "../assets/portfolio/houseprice.png";
import yen from  "../assets/portfolio/yen.png";

const Porfolio = () => {
    const projects =[
        {
            id : 6,
            src : houseprice,
            code : "https://github.com/2dtkingslayer/Real-Estate-House-Price-Prediction",
            demo: "https://youtu.be/kqs3AWT9IWE" ,
            report: false,
        },
        {
            id : 1,
            src : ibm,
            demo : "https://youtu.be/NqpXDhtwrMk" ,
            code : "https://github.com/2dtkingslayer/IBM-CallForCodeFairWorkCase2022",
            report : false,
        },
        {
            id : 2,
            src : bookstore,
            demo : "",
            code : "https://github.com/2dtkingslayer/2DTBooksotre" ,
            report : false,
        },
        {
            id : 3,
            src : perllike,
            demo : "",
            code : "https://github.com/2dtkingslayer/New_Perl-Like_Language",
            report : false
        },
        {
            id : 4,
            src : salesfunnel,
            code : "https://github.com/2dtkingslayer/MarketingSite-with-SalesFunnel",
            demo : "https://njit-wis.github.io/project-2-is218-cbt/",
            report : false,
        },
        {
            id : 5,
            src : covid19BK,
            code : "",
            demo : "https://drive.google.com/file/d/1rGMhC9CDoE77admK-_q9-v9BqSCfJLHy/view?usp=sharing",
            report : true
        },
        {
            id : 7,
            src : yen,
            code : "https://github.com/2dtkingslayer/yen",
            demo : "",
            report : false,
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full md:h-full text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Check out some of my work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id,src,demo,code,report})=>(
                    <div id ={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img  src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    {report ? (
                    <div className='flex items-center justify-center'>
                    <a href={demo} target="_blank" rel="noreferrer">
                    <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Report</button>
                    </a>
                        
                    </div>
                    ) : (
                    <div className='flex items-center justify-center'>
                    <a href={demo} target="_blank" rel="noreferrer">
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    </a>
                    <a href={code} target="_blank" rel="noreferrer">
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </a>                           
                    </div>
                    )}
                    
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Porfolio