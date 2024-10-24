import React from "react";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa";
export const Hero = () => {
  return (
    <>
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="green" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-lg text-center text-blue-100 max-w-2xl">
            ANJAL PATEL
          </h1>

          <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Staunch with a Passion for Building Scalable Solutions and Continuous Learning"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hello, I&apos;m Anjal, a FrontEnd turning Full-Stack Developer.
          </p>
          <a href='#about'></a>
          <MagicButton 
          title="Anjal's Work"
          icon={<FaLocationArrow />}
          position='right'
          />
        </div>
      </div>

    </div>
    </>
  );
};
