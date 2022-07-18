import Link from 'next/link';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import styles from "../styles/home.module.scss";
import TypeAnimation from 'react-type-animation';
import NavLogo2 from '../public/assets/navLogo2.png'

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
      <div className=' w-full h-full mx-auto p-2 flex justify-center items-center text-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-[#E2E8F0]'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h2 className='py-4 text-[#E2E8F0] sm:text-3xl md:text-5xl'>
            Hi, I&#39;m
            <TypeAnimation
              className='text-purple-600'
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
          <div className='hidden md:flex' id={styles.container}>
            <div id={styles.flip}>
              <div><div>Computer Systems Engineer</div></div>
              <div><div>Full Stack Developer</div></div>
              <div><div>Next.js Developer</div></div>
            </div>
            
          </div>
          <h3 className='invisible text-[#E2E8F0] sm:text-3xl md:text-5xl'>Muhammad Abdullah Arif Ansari|</h3>
        </div>
        {/* <div className='w-1/4 hidden md:flex'>
          <Image src={NavLogo2} width='400px' height='750px' />
        </div> */}


      </div>
    </div>
  );
};

export default Main;
