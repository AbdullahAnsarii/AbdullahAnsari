import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/social.module.scss';
import { Slide } from "react-awesome-reveal";

const Social = () => {
  return (
    <>
      <h1 className={styles.h1} dataShadow='Social Links'>Social Links</h1>
      <div id='social' className='w-full md:h-screen p-2 flex flex-col items-center justify-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid gap-8'>
            <h2 className='py-1'>Find Me Here</h2>
            <div className='flex items-center justify-center'>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://www.linkedin.com/in/abdullahansarii/"><img src="https://img.icons8.com/color/96/000000/linkedin.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://github.com/AbdullahAnsarii"><img src="https://img.icons8.com/fluency/96/000000/github.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://stackoverflow.com/users/13062632/abdullah-ansari"><img width='65px' src="/assets/so.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://www.facebook.com/abdullahansariee"><img src="https://img.icons8.com/fluency/96/000000/facebook-new.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://www.instagram.com/abdullahansarie/"><img src="https://img.icons8.com/fluency/96/000000/instagram-new.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://abdullahansarii.medium.com/"><img src="https://img.icons8.com/ios-filled/96/ffffff/medium-monogram--v1.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://twitter.com/abdullahansarie"><img src="https://img.icons8.com/color/96/000000/twitter--v1.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://www.upwork.com/freelancers/~014f4f712850258e17"><img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/000000/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://join.skype.com/invite/xjcClYAx5jdS"><img src="https://img.icons8.com/fluency/96/000000/skype.png"/></a>
                <a className='hover:scale-105 ease-in duration-300' target="_blank" href="mailto:aa9272137@gmail.com"><img src="https://img.icons8.com/color/96/000000/gmail-new.png"/></a>
            </div>
        </div>
        <div className='mt-6'>
            <img src='/assets/woah.png' width='100%' />
        </div>
      </div>
    </>
  );
};

export default Social;
