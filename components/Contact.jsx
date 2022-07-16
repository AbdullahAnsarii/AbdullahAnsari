import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.png'
import styles from '../styles/social.module.scss';
import { postMessage } from '../utility/message.js'

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, phone, email, subject, message)
    setLoading(true);
    postMessage(name, phone, subject, email, message)
      .then(() => {
        setName('');
        setPhone('');
        setEmail('');
        setSubject('');
        setMessage('');
        setLoading(false);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
      })
  };

  return (
    <>
      <h1 className={styles.h1} dataShadow='Contact'>Contact</h1>

      <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
          <h2 className='py-4'>Get In Touch</h2>
          <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-md shadow-white rounded-xl p-4'>
              <div className='lg:p-4 h-full '>
                <div>
                  <Image
                    className='rounded-xl hover:scale-105 ease-in duration-300'
                    src={ContactImg}
                    alt='/'
                  />
                </div>
                <div>
                  <h2 className='py-2'>Abdullah Ansari</h2>
                  <p>Full Stack Developer</p>
                  <p className='py-4'>
                    Reach out to me for any query by submitting this form.
                  </p>
                </div>
                <div>
                  <p className='uppercase pt-8'>Connect With Me</p>
                  <div className='flex items-center justify-between py-4'>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://www.linkedin.com/in/abdullahansarii/"><img src="https://img.icons8.com/color/60/000000/linkedin.png" /></a>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://github.com/AbdullahAnsarii"><img src="https://img.icons8.com/fluency/60/000000/github.png" /></a>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="https://join.skype.com/invite/xjcClYAx5jdS"><img src="https://img.icons8.com/fluency/60/000000/skype.png" /></a>
                    <a className='hover:scale-105 ease-in duration-300' target="_blank" href="mailto:aa9272137@gmail.com"><img src="https://img.icons8.com/color/60/000000/gmail-new.png" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-md shadow-white rounded-xl lg:p-4'>
              <div className='p-4'>
                {showMessage && <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                  <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                      <p class="font-bold">Message sent successfully</p>
                      <p class="text-sm">I will get back at you as soon as possible.</p>
                    </div>
                  </div>
                </div>}
                <form
                  onSubmit={handleSubmit}

                >
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input
                        required
                        className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>
                        Phone Number
                      </label>
                      <input
                        required
                        className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                        type='text'
                        name='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input
                      required
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                      type='email'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300 text-black'
                      type='text'
                      name='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea
                      required
                      className='border-2 rounded-lg p-3 border-gray-300 text-black'
                      rows='10'
                      name='message'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button disabled={loading} className='w-full p-4 text-gray-100 mt-4'>
                    {loading && <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>}
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-12'>
            <Link href='/'>
              <a>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <HiOutlineChevronDoubleUp
                    className='text-purple-600'
                    size={30}
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <footer className="">
            <section className='p-5 bg-black text-white'>
                <div >
                    <div className="">
                        <div className="text-center">
                            &copy; {(new Date()).getFullYear()} Abdullah Ansari. All rights reserved.
                        </div>
                    </div>
                </div>
            </section>
        </footer>
      </div>
    </>
  );
};

export default Contact;
