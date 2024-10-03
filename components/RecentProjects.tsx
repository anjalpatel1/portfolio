import { projects } from '@/data/index'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from "react-icons/fa";
import Image from '@/node_modules/next/image';

const RecentProjects = () => {
  return (
    <div className='py-20' id="projects" >
        <h1 className='heading'>
            MY RECENT PROJECTS {" "}
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({
                id,
                title,
                des,
                iconLists,
                link
            }) => (
                <div key={id} className='sm:h-[41rem] h-[32rem] sm:w-[570px] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]'>
                    <PinContainer 
                    title={title}
                    href={link}
                    >
                        <div className='relative flex items-center justify-center sm:w-96 w-[100vw] sm:h-[40vh] overflow-hidden h-[40vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-xl bg-[#13162d]'>
                                <Image src="/logo.svg"  />
                            </div>
                            <Image src="{img}"  className="z-10 relative" />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'> 
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font:normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-center mt-7 mb-3 gap-2'>
                            <div className='flex items-center justify-center'>
                                {iconLists.map((icon, index) => (
                                    <div key={icon} 
                                    className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' 
                                    style={{
                                        transform:`translateX (-${5 * index * 2} px)`
                                        }}>
                                        <img src={icon} alt={icon} className="p-2" />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>
                                    Link
                                </p>
                                <FaLocationArrow className="ms-3" color='#CBACF9' />
                            </div>
                        </div>

                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects