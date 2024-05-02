import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import {BsFillPersonLinesFill} from "react-icons/bs";
import GfG_logo from '../assets/logos/gfg_logo.png';

const SocialLinks = () => {
    const links=[
        {
            id: 1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}></FaLinkedin>
                </>
            ),
            href:'https://www.linkedin.com/in/omkar-yelam-67b174205',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                GitHub <FaGithub size={30}></FaGithub>
                </>
            ),
            href:'https://github.com/omsabade1857/',
            
        },
        {
            id: 3,
            child:(
                <>
                Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>
            ),
            href:'mailto:omsabade1857@gmail.com',
            
        },
        {
        id: 4,
        child:(
            <>
            <p>Leetcode</p>
            <img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/FFFFFF/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo"/>
            </>
        ),
        href:'https://leetcode.com/u/omsabade1857/',
        },
        // {
        //     id: 5,
        //     child:(
        //         <>
        //         Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        //         </>
        //     ),
        //     href:'/Aastha_agarwal_resume.pdf',
        //     style: 'rounded-br-md',
        //     download:true,
        // }
        {
            id: 5,
            child:(
                <>
                <p>GeeksforGeeks</p>
                <img height="40" width="40" src={GfG_logo} alt="GeeksForGeeks Logo"  className='-mr-1'></img>
                </>
            ),
            style: 'rounded-br-md',
            href:'https://www.geeksforgeeks.org/user/omsabado9oq/',
        }

    ]
    
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed '>
        <ul>
            {links.map(({id,child,href,style,download}) => (
                <li key={id} className={`flex justify-between items-center w-48 h-14 px-4 ml-[-130px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
            <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel="noreferrer">
            {child}
            </a> 
            </li>
            ))}

        </ul>
    </div>

  )
}

export default SocialLinks