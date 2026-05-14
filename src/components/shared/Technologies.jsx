'use client';
import { motion } from 'framer-motion';
import {
    SiJavascript, SiReact, SiNextdotjs,
    SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb
} from 'react-icons/si';

const Technologies = () => {
    const techStack = [
        { id: 1, name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { id: 2, name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { id: 3, name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
        { id: 4, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { id: 5, name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { id: 6, name: 'Express', icon: <SiExpress className="text-black" /> },
        { id: 7, name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    ];

    return (
        <section id='technology' className="py-20   text-center relative">
             
            <div className="mb-12">
                <h2 className="text-4xl font-bold  ">Technologies</h2>
                <p className="text-gray-500 dark:text-white/70 font-medium mt-2">My Tech Stack</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 px-4 max-w-5xl mx-auto">
                {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.id}
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}

                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-md hover:scale-110 duration-300 rounded-2xl shadow-lg shadow-black/30 dark:shadow-white/10 border  flex items-center justify-center text-4xl md:text-5xl cursor-pointer"
                    >
                        {tech.icon}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;