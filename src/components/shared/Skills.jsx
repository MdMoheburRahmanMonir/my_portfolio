'use client';
import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';

import { SiBetterauth } from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    {
      name: 'HTML5',
      level: 'Expert',
      icon: <FaHtml5 className="text-orange-500 text-xl mt-1" />,
    },
    {
      name: 'Next.js',
      level: 'Expert',
      icon: <SiNextdotjs className="text-black dark:text-white text-xl mt-1" />,
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      icon: <SiTypescript className="text-blue-500 text-xl mt-1" />,
    },
    {
      name: 'Tailwind Css',
      level: 'Expert',
      icon: <SiTailwindcss className="text-cyan-400 text-xl mt-1" />,
    },
    {
      name: 'JavaScript',
      level: 'Expert',
      icon: <SiJavascript className="text-yellow-400 text-xl mt-1" />,
    },
    {
      name: 'React.js',
      level: 'Expert',
      icon: <FaReact className="text-cyan-500 text-xl mt-1" />,
    },
  ];

  const backendSkills = [
    {
      name: 'Node.js',
      level: 'Expert',
      icon: <FaNodeJs className="text-green-500 text-xl mt-1" />,
    },
    {
      name: 'MongoDB',
      level: 'Expert',
      icon: <SiMongodb className="text-green-400 text-xl mt-1" />,
    },
    {
      name: 'Express.js',
      level: 'Expert',
      icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-xl mt-1" />,
    },
    {
      name: 'BetterAuth',
      level: 'Expert',
      icon: <SiBetterauth  className="text-black text-xl mt-1" />,
    },
  ];

  return (
    <section id='skill' className="py-20 px-4 relative ">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="mt-2 text-sm font-medium">My Technical Level</p>
      </div>

      {/* Skills Container */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-18">

        {/* Frontend Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="group relative border overflow-hidden border-gray-200/20 hover:scale-105 duration-300 shadow-xl backdrop-blur-3xl bg-black/2 dark:bg-white/5 shadow-black/20 dark:shadow-white/15 rounded-[2rem] p-8 md:p-12"
        >
          <span className='absolute top-0 left-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>
          <span className='absolute top-0 right-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>
          <span className='absolute bottom-0 right-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>
          <span className='absolute bottom-0 left-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>

          <h3 className="text-xl font-semibold text-center mb-10">
            Frontend Developer
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-start gap-2 hover:scale-105 duration-300"
              >
                {skill.icon}

                <div>
                  <h4 className="font-bold leading-tight">
                    {skill.name}
                  </h4>

                  <p className="text-[12px]">
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden relative border border-gray-200/20 hover:scale-105 duration-300 shadow-xl backdrop-blur-md bg-black/2 dark:bg-white/5 shadow-black/20 dark:shadow-white/15 rounded-[2rem] p-8 md:p-12"
        >
          <span className='absolute top-0 left-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>
          <span className='absolute top-0 right-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>
          <span className='absolute bottom-0 right-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>
          <span className='absolute bottom-0 left-0 w-[20%] h-[20%] bg-cyan-200 dark:bg-black blur-3xl'></span>

          <h3 className="text-xl font-semibold text-center mb-10">
            Backend Developer
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-start gap-2 hover:scale-105 duration-300"
              >
                {skill.icon}

                <div>
                  <h4 className="font-bold leading-tight">
                    {skill.name}
                  </h4>

                  <p className="text-[12px]">
                    {skill.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;