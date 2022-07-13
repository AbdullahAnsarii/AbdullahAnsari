import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';
import styles from '../styles/about.module.scss';
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <h1 className={styles.h1} dataShadow='About'>About</h1>
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <h2 className='py-4'>Who I Am</h2>
            <ul className={styles.about}>
              <li>I am a Full Stack Developer mostly working with JavaScript/TypeScript, NextJS/React, Node.js/Express, MongoDB and Firebase.</li>
              <li>I have done my Bachelor in Computer Systems Engineering (BE-CS) from <a className='text-[#9D00FF] underline' target="_black" href='https://www.neduet.edu.pk/'>NED University of Engineering and Technology</a>.</li>
              <li>I have been working as a Software Engineer at <a className='text-[#9D00FF] underline' target="_blank" href="https://magicaldigits.com">Magical Digits</a> for the last two years, where I collaborate with a team of developers to create products that are being used by various people around the globe.</li>
              <li>I have worked with clients from all over the world, including but not limited to clients from the USA, UK, Georgia, Poland, and India.</li>
            </ul>
            <button className='inline-flex items-center'>
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Download Resume</span>
            </button>
            <Link href='/#projects'>
              <p className='py-2 text-[#9D00FF] underline cursor-pointer'>
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
