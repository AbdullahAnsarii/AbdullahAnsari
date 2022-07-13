import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import styles from '../styles/social.module.scss';

const Skills = () => {
  return (
    <>
      <h1 className={styles.h1} dataShadow='Skills'>Skills</h1>

      <div id='skills' className='w-full p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>


          <h2 className='py-4'>Front-End Skills</h2>
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
          <h2 className='py-4'>Back-End Skills</h2>
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
                  <img src="/assets/Expressjs.png" width='180px' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Express</h3>
                </div>
              </div>
            </div>
            <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src="/assets/asp.png" width='100%' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>ASP.NET</h3>
                </div>
              </div>
            </div>
          </div>

          <h2 className='py-4'>Database Skills</h2>
          <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
            <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src='/assets/skills/mongo.png' width='64px' height='64px' />
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
                  <img src="/assets/sql.png" width='100%' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>SQL Server</h3>
                </div>
              </div>
            </div>
          </div>

          <h2 className='py-4'>Misc. Skills/Programming Languages</h2>
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
                  <img src="https://img.icons8.com/color/96/000000/typescript.png" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>TypeScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src="https://img.icons8.com/color/96/000000/python--v1.png" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src="https://img.icons8.com/ios-filled/50/280068/c-sharp-logo.png" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>C#</h3>
                </div>
              </div>
            </div>
         
          <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src="https://img.icons8.com/color/96/000000/react-native.png" width='100%' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React Native</h3>
              </div>
            </div>
          </div>
          <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 text-black bg-white shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src="https://img.icons8.com/color/96/000000/git.png" />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Skills;
