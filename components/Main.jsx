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
          <div className='hidden md:flex' id={styles.container}>
            <div id={styles.flip}>
              <div><div>Computer Systems Engineer</div></div>
              <div><div>Full Stack Developer</div></div>
              <div><div>Next.js Developer</div></div>
            </div>
          </div>

        </div>
        <div className='w-1/4 hidden md:flex'>
          <Image src={NavLogo2} width='400px' height='750px' />
        </div>


      </div>
    </div>
  );
};

export default Main;
