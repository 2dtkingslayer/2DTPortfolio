import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-8' align='justify'>
            As a Computer Science student, I have passion for software
            engineering. I am continuously expanding my knowledge of modern technologies to become a well-rounded
            full-stack developer. Beside schoolwork, I enjoy participating in hackathons, programming contests, and
            building side projects to apply my knowledge. I'm always forward to learning new things and collaborate
            with other technical minds!
            </p>

            <br/>

            <p className='text-xl' align='justify'>
            My concentrations are algorithms (back-end), low level code, and Machine Learning algorithms.
            I had experienced interning as a Software Engineer at CRANE Co. - Westlock Controls from May to August 2023.
            During the internship, I used Machine Learning algorithms to detect abnormal valve system’s vibration from
            real-world data collected by AWS Monitron, Westlock Controls’ new vibration sensor, and MQTT protocol.
            </p>
        </div>
    </div>
  )
}

export default About