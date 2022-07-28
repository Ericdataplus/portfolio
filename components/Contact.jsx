import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='data:image/jpeg;base64,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'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Eric Wheeler</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
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

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                onSubmit={handleSubmit}
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
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
                      className='border-2 rounded-lg p-3 flex border-gray-300'
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
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
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
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;