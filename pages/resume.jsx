import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Eric | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Eric  Wheeler</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p>
            Proven Leadership <span className='px-1'>|</span> Web Development{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <p>
        Computer enthusiast and self-driven Artificial Intelligence Practitioner with a desire to learn and work in challenging environments with opportunities for growth. Including management of: back-up, databases, and cloud/network systems. Committed to lifelong learning. 
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        {/* Experience */}
        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-4'>
        Projects
          </h5>
          <p className='italic'>
            {/* <span className='font-bold'>Preston EMS</span>
            <span className='px-2'>|</span>Grayson County, TX */}
          </p>
          {/* <p className='py-1 italic'>Paramedic (Current)</p> */}
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Lead paramedic on an ALS 911 ambulance covering rural Grayson
              County.
            </li>
            <li>
              Work surrounding departments organizing treatment protocols and
              facilitate hands on training operations.
            </li>
            <li>
              Manage high stress 911 situations such as medical emergencies,
              traumatic emergencies, and water accidents
            </li>
            <li>
              Public outreach and relations for the municipality from healthcare
              awareness to training methods.
            </li>
          </ul>
        </div>
        {/* Experience */}
        {/* <div className='py-4'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
        {/* Experience */}
        {/* <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
              BIGCOMMERCE, SHOPIFY, WOOCOMMERCE
            </span>
            <span className='px-2'>|</span>Sachse, TX
          </p>
          <p className='py-1 italic'>Freelance Work</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive understanding of HTML, CSS, and JavaScript
              to troubleshoot issues and concerns.
            </li>
            <li>
              Fixes small bugs, configure operation and analytic plugins, and
              design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;