import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import cpp from "../assets/c++.png";
import node from "../assets/node.png";
import java from "../assets/java.svg";
import php from "../assets/php.svg";
import swift from "../assets/swift.svg";
import git from "../assets/git.svg";
import ibmcloud from "../assets/ibmcloud.svg";
import flask from "../assets/flask2.png";
import bootstrapp from "../assets/bootstrap.svg";
import awscloud from "../assets/amazon_aws.svg";
import mailchimp from "../assets/mailchimp-icon.svg";
import ga from "../assets/google_analytics.svg";
import docker from "../assets/DOCKER.svg";
import vscode from "../assets/visualstudio.svg";
import heroku from "../assets/heroku.svg";
import xcode from "../assets/xcode.svg";

const Experience = () => {
    const techs = [
        {id: 1, src: cpp, color: "shadow-blue-500", name: "C++", type : "lang"},
        {id: 2, src: python, color : "shadow-yellow-500", name : "Python", type: "lang"},
        {id: 3, src: java, color : "shadow-orange-500", name : "Java", type : "lang"},
        {id: 4, src: javascript, color: "shadow-yellow-500", name: "JavaScript", type: "lang"},
        {id: 5, src: html, color: "shadow-orange-500", name: "HTML", type: "lang"},
        {id: 6, src: css, color: "shadow-blue-500", name: "CSS", type: "lang"},
        {id: 7, src: php, color: "shadow-purple-500", name: "PHP", type: "lang"},
        {id: 8, src: swift, color: "shadow-orange-500", name: "Swift", type: "lang"},
        {id: 9, src: git, color: "shadow-red-500", name: "Git", type: "lang"},
        {id: 10, src: reactImage, color: "shadow-cyan-500", name: "React", type: "frame"},
        {id: 11, src: nextjs, color: "shadow-white", name: "Next JS", type: "frame"},
        {id: 12, src: ibmcloud, color: "shadow-blue-600", name: "IBM Cloud", type: "frame"},
        {id: 13, src: node, color: "shadow-green-400", name: "Node JS", type: "frame"},
        {id: 14, src: flask, color: "shadow-white", name: "Flask", type: "frame"},
        {id: 15, src: bootstrapp, color: "shadow-violet-500", name: "Bootstrap", type: "frame"},
        {id: 16, src: awscloud, color: "shadow-orange-500", name: "Amazon Web Services", type: "tool"},
        {id: 17, src: mailchimp, color: "shadow-yellow-900", name: "MailChimp", type: "tool"},
        {id: 18, src: ga, color: "shadow-orange-400", name: "Google Analytics", type: "tool"},
        {id: 19, src: github, color: "shadow-gray-400", name: "GitHub", type: "tool"},
        {id: 20, src: docker, color: "shadow-cyan-200", name: "Docker", type: "tool"},
        {id: 21, src : vscode, color : "shadow-sky-600", name : "Visual Studio Code", type : "tool"},
        {id: 22, src: xcode, color: "shadow-blue-800", name: "XCode", type: "tool"},
        {id: 23, src: heroku, color: "shadow-purple-300", name: "Heroku", type: "tool"},
    ]
    return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-full py-10 text-white'>
        <div className='max-w-screen-lg mt-8 p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            </div>

            <p className='text-2xl font-bold inline text-center'>CODING LANGUAGES</p>
            <div className='w-full grid sm:grid-cols-3 gap-8 text-center grid-cols-2 py-2 px-12 sm:px-0'>
                { techs.map(({id, src, color, name, type}) => (
                    type === "lang" ? (
                        <div key = {id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}>
                            <img src={src} alt="" className='w-24 mx-auto'/>
                            <p className='mt-4'>{name}</p>
                        </div>
                    ) : ""
                ))}
            </div>
            <br></br>
            <p className='text-2xl font-bold inline text-center'>FRAMEWORKS</p>
            <div className='w-full grid sm:grid-cols-3 gap-8 text-center grid-cols-2 py-2 px-12 sm:px-0'>
                { techs.map(({id, src, color, name, type}) => (
                    type === "frame" ? (
                        <div key = {id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}>
                            <img src={src} alt="" className='w-24 mx-auto'/>
                            <p className='mt-4'>{name}</p>
                        </div>
                    ) : ""
                ))}
            </div>
            <br></br>
            <p className='text-2xl font-bold inline text-center'>TOOLS</p>
            <div className='w-full grid sm:grid-cols-3 gap-8 text-center grid-cols-2 py-2 px-12 sm:px-0'>
                { techs.map(({id, src, color, name, type}) => (
                    type === "tool" ? (
                        <div key = {id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}>
                            <img src={src} alt="" className='w-24 mx-auto'/>
                            <p className='mt-4'>{name}</p>
                        </div>
                    ) : ""
                ))}
            </div>
        </div>
    </div>
    )
}

export default Experience