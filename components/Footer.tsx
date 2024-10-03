import { socialMedia } from '@/data/index';
import dynamic from 'next/dynamic';
import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import MagicButton  from './MagicButton';

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 mb-[100px] md:mb-5 ' id="contact">
        <div className='flex flex-col items-center font-bold'>
            <h1 className='text-4xl'>
                Ready to take your digital presence to the next level?
            </h1>
            <p className="text-white-600 text-xl md:mt-10 my-5 text-center">
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
            <a href="mailto:patel.anjal567@gmail.com">
                <MagicButton
                title="Lets get in touch"
                icon={<FaLocationArrow />}
                position="right"
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 ANJAL PATEL</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 ">
                        <img src={profile.img} alt={profile.id} width={20} height={20} />
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;