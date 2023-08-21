'use client'
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { HiLink } from "react-icons/hi";
import { ImGithub } from "react-icons/im";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  features,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl gap-4'>
      <h3 className='text-white font-bold text-[28px] flex gap-2 items-center my-2 '>{name}<HiLink size={15}/></h3>
      <div className='lg:flex gap-10 lg:flex-row lg:justify-between lg:items-center'>
      <Tilt className=' lg:w-[90%] lg:h-[90%] w-full h-full'
        options={{
          max: 20,
          scale: 1,
          speed: 200,
        }}
      >
        <div className='relative cursor-pointer flex justify-between'>
          <img
            src={image.src}
            alt='project_image'
            className=' h-full w-full object-cover rounded-2xl'
          />
        </div>
        </Tilt>
        <div onClick={() => window.open(live_link, "_blank")} className='flex sm:flex lg:flex-col gap-8 mt-3'>
        <button className=" text-gradient lg:w-[10%] flex justify-center">
          <p className="text-white font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary ">
          <HiLink size={30} className=" text-[#915EFF]"/>
          </p>
          </button>
          <button onClick={() => window.open(source_code_link, "_blank")} className=" text-gradient lg:w-[10%] flex justify-center">
          <p className="text-white font-semibold text-sm lg:text-[24px] hover:scale-105 transition-all duration-200 flex gap-2 items-center p-3 border-2 rounded-full border-secondary ">
          <ImGithub size={30} className=" text-[#915EFF]"/>
          </p>
          </button>
          </div>
        </div>

        <div>
        <div className='mt-5'>
          <p className='mt-2 text-gray-300 text-[19px] font-semibold mb-2'>{description}</p>
          <ul className=" list-disc text-sm text-gray-300 ml-3">
            {features.map((feature,index) => (
              <li key={index} className=" mb-2">{feature}</li>
            ))}
          </ul>
        </div>

        <div className='mt-4 flex flex-wrap gap-3'>
          {tags.map((tag) => (
            <p title={tag.name}
              key={`${name}-${tag.name}`}
              className={`text-[17px] font-semibold ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p id="work" className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-col gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
