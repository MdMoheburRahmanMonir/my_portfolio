import React from 'react';
import { FaCode, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

const CourseCard = () => {
    return (
        <div className="max-w-5xl min-w-11/12 mx-auto ">
            <h3 className="text-3xl font-bold mb-8">Completed Course</h3>
            <p className="text-gray-400 mb-10">
                Below is a summary of the course I have successfully completed, showcasing the knowledge and skills I have gained.
            </p>
 
            <div className="group dark:bg-white/5 bg-black/5 border border-2 dark:border-white/20 border-black/20   hover:scale-105 duration-300  p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex gap-6"> 
                    <div className="bg-gray-800 self-center p-4 rounded-xl border border-green-500/10 flex items-center justify-center h-16 w-16">
                        <FaCode className="text-green-500 text-2xl group-hover:rotate-180 duration-300" />
                    </div>
 
                    <div>
                        <h4 className="text-xl font-bold">Programming Hero Course</h4>
                        <p className=" text-sm mb-4">6 Months (Completed)</p>
                        <p className=" max-w-md">
                            Successfully completed the Programming Hero course, earning a certificate. Here is the link to my certificate:
                        </p>
 
                        <div className="flex flex-wrap gap-3 mt-4 "> 
                            <div className="group relative">
                                <FaHtml5 className="text-3xl text-[#E34F26] hover:scale-11  0 transition-transform" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0   transition">HTML5</span>
                            </div>
 
                            <div className="group relative">
                                <FaCss3Alt className="text-3xl text-[#1572B6] hover:scale-110 transition-transform" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0  transition">CSS3</span>
                            </div>
 
                            <div className="group relative">
                                <SiTailwindcss className="text-3xl text-[#06B6D4] hover:scale-110 transition-transform" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0   transition">Tailwind</span>
                            </div>
 
                            <div className="group relative">
                                <FaJs className="text-3xl text-[#F7DF1E] hover:scale-110 transition-transform rounded" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0   transition">JavaScript</span>
                            </div>
 
                            <div className="group relative">
                                <FaReact className="text-3xl text-[#61DAFB] hover:scale-110 transition-transform" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0   transition">React</span>
                            </div>
 
                            <div className="group relative">
                                <FaNodeJs className="text-3xl text-[#339933] hover:scale-110 transition-transform" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0   transition">Node.js</span>
                            </div>
 
                            <div className="group relative">
                                <SiMongodb className="text-3xl text-[#47A248] hover:scale-110 transition-transform" />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-[10px] px-2 py-1 rounded opacity-0   transition">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
 
                <div className="text-right">
                    <a
                        href="#"
                        className="text-green-500 hover:underline text-sm font-medium block mb-2"
                    >
                        View Certificate
                    </a>
                    <div className="w-32 h-20 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                        <img src="certificate-preview.jpg" alt="Panding" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;