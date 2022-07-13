import Image from 'next/image';
import React from 'react';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Express from "../public/assets/Expressjs.png";
import ASP from "../public/assets/asp.png";
import MongoDB from '../public/assets/skills/mongo.png';
import SQL from "../public/assets/sql.png";
import styles from '../styles/social.module.scss';
import { Slide } from 'react-awesome-reveal';

const Skills = () => {
  return (
    <>
      <h1 className={styles.h1} dataShadow='Skills'>Skills</h1>

      <div id='skills' className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>


          <h2 className='py-4'>Front-End</h2>
          <Slide triggerOnce direction='up' fraction={0.5} delay={0}>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={NextJS} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Next.js</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={ReactImg} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img src="https://img.icons8.com/color/96/000000/sass.png" width='100%' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Sass</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img src="https://img.icons8.com/color/96/000000/bootstrap.png" width='100%' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Bootstrap</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={Tailwind} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img src="https://img.icons8.com/ios-filled/50/228BE6/jquery.png" width='100%' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>JQuery</h3>
                  </div>
                </div>
              </div>
            </div>
          </Slide>


          <h2 className='py-4'>Back-End</h2>
          <Slide triggerOnce direction='up' fraction={0.5} delay={0}>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img src="https://img.icons8.com/color/96/000000/nodejs.png" width='100%' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Node.js</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img src={Express} width='180px' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Express</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img src={ASP} width='100%' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>ASP.NET</h3>
                  </div>
                </div>
              </div>
            </div>
          </Slide>


          <h2 className='py-4'>Database</h2>
          <Slide triggerOnce direction='up' fraction={0.5} delay={0}>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={MongoDB} width='64px' height='64px' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>MongoDB</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={Firebase} width='64px' height='64px' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Firebase</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image width='100%' height='64px' src={SQL} />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>SQL Server</h3>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <h2 className='py-4'>Misc./Programming Languages</h2>
          <Slide triggerOnce direction='up' fraction={0.5} delay={0}>
            <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
              <div className='p-6  text-black bg-white  shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={Javascript} width='64px' height='64px' alt='/' />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img width='100%' height='64px' src="https://img.icons8.com/color/96/000000/typescript.png" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>TypeScript</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img width='100%' height='64px' src="https://img.icons8.com/color/96/000000/python--v1.png" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Python</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img width='100%' height='64px' src="https://img.icons8.com/ios-filled/50/280068/c-sharp-logo.png" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>C#</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img width='100%' height='64px' src="https://img.icons8.com/color/96/000000/react-native.png" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>React Native</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img width='100%' height='64px' src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>AWS</h3>
                  </div>
                </div>
              </div>
              <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <img width='100%' height='64px' src="https://img.icons8.com/color/96/000000/git.png" />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <h3>Git</h3>
                  </div>
                </div>
              </div>
            </div>
          </Slide>


        </div>
      </div>
    </>
  );
};

export default Skills;
