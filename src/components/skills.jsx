import React from 'react';
import java from "../assets/Experience/java.svg";
import cSharp from "../assets/Experience/cSharp.svg";
import c from "../assets/Experience/c.svg";
import cpp from "../assets/Experience/cpp.svg";
import docker from "../assets/Experience/docker.svg";
import kubernetes from "../assets/Experience/kubernets.svg";
import github from "../assets/Experience/github.svg";
import mysql from "../assets/Experience/mysql.svg";
import spring from '../assets/Experience/spring.svg';
import springBoot from '../assets/Experience/springBoot.svg';
import aspnet from '../assets/Experience/aspNet.svg';
import react from '../assets/Experience/react.svg';

export const Skills = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: 'Java',
      style: 'shadow-blue-500'
    },
    {
      id: 2,
      src: c,
      title: 'C',
      style: 'shadow-orange-500'
    },
    {
      id: 3,
      src: cpp,
      title: 'C++',
      style: 'shadow-blue-300'
    },
    {
      id: 4,
      src: cSharp,
      title: 'C#',
      style: 'shadow-yellow-500'
    },
    {
      id: 5,
      src: docker,
      title: 'Docker',
      style: 'shadow-teal-400'
    },
    {
      id: 6,
      src: kubernetes,
      title: 'Kubernetes',
      style: 'shadow-blue-800'
    },
    {
      id: 7,
      src: github,
      title: 'Github',
      style: 'shadow-cyan-300'
    },
    {
      id: 8,
      src: mysql,
      title: 'MySQL',
      style: 'shadow-gray-400'
    }
  ];
<br/>
  const frame = [
    {
      id: 9,
      src: spring,
      title: 'Spring',
      style: 'shadow-blue-500'
    },
    {
      id: 10,
      src: springBoot,
      title: 'Spring Boot',
      style: 'shadow-orange-500'
    },
    {
      id: 11,
      src: aspnet,
      title: 'ASP.NET',
      style: 'shadow-blue-300'
    },
    {
      id: 12,
      src: react,
      title: 'React',
      style: 'shadow-blue-300'
    }
  ];
  
  // <frameWork/>
  return (
    <div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen' style={{ paddingTop: '250px'}}>
      <br/><br/>
      <div className='max-w-screen-lg p-10 mx-auto flex flex-col justify-center text-white h-full '>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Skills</p>
          <p className='py-6'>These are the technologies I've worked with:</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className='w-20 h-20 mx-auto'></img>
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Framework</p>
          <p className='py-6'>These are the framework I've worked with:</p>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>
          {frame.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className='w-20 h-20 mx-auto'></img>
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
