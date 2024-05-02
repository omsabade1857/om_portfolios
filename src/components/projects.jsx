import React from 'react'
import {FaGithub} from 'react-icons/fa';
import Aarogyasathi from '../assets/Projects/aarogyasathi.png';
import musify from '../assets/Projects/musify.jpg';
import ArogyaSathiC from '../assets/Projects/aarogyasathic.png';
export const Projects = () => {
    const projects = [
        {
            id: 1,
            src: Aarogyasathi,
            title: "AarogyaSathi",
            description: "Aarogya Sathi, a Java-based medical portal, preserves patient records, schedules appointments, and enables diagnosis report downloads. Patients manage appointments and view medical history, while doctors analyze records for effective treatment. Admins oversee operations with a secure, responsive UI, featuring JWT authentication and role-based authorization",
            href: "https://githhttps://github.com/omsabade1857/AarogyaSathiFinal_Java"
        },
        {
            id: 2,
            src: musify,
            title: "Musify",
            description: "Spotify clone is a music streaming platform that helps you gain an advantage in the lucrative streaming industry. Our platform is designed to redefine the way you share and monetize your art, providing a dynamic space where your talent can truly flourish.",
            href:"https://github.com/omsabade1857/songpuzzle.github.io"

        },
        {
            id: 3,
            src: ArogyaSathiC,
            title:"AarogyaSathi",
            description:"Aarogya Sathi streamlines healthcare by managing patient records, scheduling appointments, and accessing diagnostic reports. Patients easily book appointments and review records, while doctors analyze histories for personalized treatments. Admins ensure smooth operations via a React-based interface with secure authentication and role-based access controls",
            href:"https://github.com/omsabade1857/ArogyaSathiC.dotnet"

        }
    ]
    return (
       <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-auto'>
  <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center h-full py-20'>
    <div>
      <br/>
      <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
      <p className='py-6'>Check out some of my work right here :</p>
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0'>
      {
        projects.map(({ id, src, href, title, description }) => (
          <div key={id} className='-mx-2 shadow-md shadow-gray-600 rounded-lg w-[65%] sm:w-auto'>
            <img src={src} alt="" className='rounded-md hover:scale-105 hover:duration-300' />
            <div className='flex flex-col items-center justify-center px-4'>
              <div className='sm:h-100 md:h-100 pb-100'>
                <h1 className='py-4 font-bold text-xl md:h-20'>{title}</h1>
                <p className='text-justify'>{description}</p>
              </div>
              <a href={href} className='flex px-3 py-3 m-4 hover:scale-105 justify-around items-center w-full text-white text-xl lg:px-16 md:px-8 sm:px-14 hover:bg-slate-500 hover:rounded-xl hover:duration-500' target='_blank' rel="noreferrer">
                Code <FaGithub size={30}></FaGithub>
              </a>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</div>


    )
}
export default Projects;
