import React from 'react';
import connect_me from '../assets/portfolio/connect_me.png';

export const Contact = () => {
        
  return (
    <div name="contact" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <br/><br/>
        <div className='max-w-screen-lg pl-10 pt-60 mx-auto flex flex-col justify-center h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact </p>
                {/* <p className='text-md py-8'>Submit the form below to get in touch with me :</p> */}
            </div>
            <div className='flex items-center flex-col sm:flex-row  pt-10'>
                <form action='https://getform.io/f/ede286cd-912f-4192-bed5-021b47a6ad59' method="post" className='flex flex-col mr-8 pt-2 space-y-5 w-full md:w-[40%]'>
                    <input type='text' name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none'></input>
                    <input type='text' name="email" placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none'></input>
                    <textarea name='message' rows="6" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-xl text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-xl hover:scale-110 duration-300'>Let's talk!</button>
                </form>
                <img src={connect_me} alt="" className='-ml-1 h-auto w-[10%] sm:w-[50%] sm:ml-24'></img>
            </div>
        </div>
    </div>
  );
};

export default Contact;
