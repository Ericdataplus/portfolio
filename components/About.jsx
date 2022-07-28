import React from 'react';
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am committed to building my skills as a software engineer.
          </p>
          <p className='py-2 text-gray-600'>
            I have spent the last 4 years learning Javascript and Python and Im always ready to tackle new langauges and technologies. 
          </p>
          <p className='py-2 text-gray-600'>
            Ive been introduced to the world of web development through my interest in data and delivering utility through software.
            Im always looking to tackle new technologies and languages, and I am always looking to learn new things.
            I enjoy working with people and being a part of a team.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='https://preview.redd.it/7k55z8owg8x41.jpg?auto=webp&s=82d00d30a9f39a132e22b490f5d0b1027394bed3'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;