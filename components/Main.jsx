import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import styles from "../styles/home.module.scss";
import TypeAnimation from 'react-type-animation';

const Main = () => {
  const dots = () => {
    return (
      <>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
      </>
    )
  }
  return (
    <div id='home' className='w-full h-screen max-w-[1240px]'>
      {dots()}
      <div className=' w-3/4 h-full mx-auto p-2 flex justify-between items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-[#dadadb]'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h2 className='py-4 text-[#dadadb] text-4xl'>
            Hi, I&#39;m
            <TypeAnimation
              className='text-[#9D00FF]'
              cursor={true}
              sequence={[
                'Muhammad Abdullah Arif Ansari',
                500,
                'Abdullah Ansari',
              ]}
              wrapper="h3"
              repeat={1}
            />
          </h2>
          <div id={styles.container}>
            <div id={styles.flip}>
              <div><div>Computer Systems Engineer</div></div>
              <div><div>Full Stack Developer</div></div>
              <div><div>Next.js Developer</div></div>
            </div>
          </div>
          {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div> */}

        </div>
        <div className='w-1/4 hidden md:flex'>
          <img src='/assets/navLogo2.png' width='100%' />
        </div>


      </div>
      {/* <img width='100%' src='/assets/navLogo.png' /> */}
    </div>
  );
};

export default Main;
