import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import NavLogo from '../public/assets/nav.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#dadadb');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-sm z-[100] ease-in-out duration-300 backdrop-blur-md px-10'
          : 'fixed w-full h-20 z-[100] backdrop-blur-md px-10'
      }
    >
      <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='170'
              height='30'
              className='cursor-pointer'
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex '>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <Link href='/#social'>Social Links</Link>
            </li>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <a target='_blank' href='https://drive.google.com/file/d/1e3cYsd9On9XnATUqub5oPNGs7laHBqDz/view'>Resume</a>
            </li>
            <li className='ml-10 text-md font-bold hover:border-b hover:border-[#9D00FF] hover:text-[#9D00FF]'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden float-right'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image
                    src='/assets/nav-mob.png'
                    width='150'
                    height='27'
                    alt='/'
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
            </div>
          </div>
          <div className='py-2 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  About
                </li>
              </Link>
              <Link href='/#social'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  Social Links
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  Projects
                </li>
              </Link>
              <a target="_blank" href='https://drive.google.com/file/d/1e3cYsd9On9XnATUqub5oPNGs7laHBqDz/view'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  Resume
                </li>
              </a>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm text-black'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#9D00FF]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://www.linkedin.com/in/abdullahansarii/"><img src="https://img.icons8.com/color/40/000000/linkedin.png" /></a>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://github.com/AbdullahAnsarii"><img src="https://img.icons8.com/fluency/40/000000/github.png" /></a>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://join.skype.com/invite/xjcClYAx5jdS"><img src="https://img.icons8.com/fluency/40/000000/skype.png" /></a>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="mailto:aa9272137@gmail.com"><img src="https://img.icons8.com/color/40/000000/gmail-new.png" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
