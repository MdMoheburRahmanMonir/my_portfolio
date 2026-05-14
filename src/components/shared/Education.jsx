'use client'
import React, { useState } from 'react'; 
import CourseCard from './CourseCard';
import EducationTimeline from './EducationTimeline';

const Education = () => {
    const [toggle, setToggle] = useState(true)
    const btnToggle = value => {
        if (value === 'Course') {
            setToggle(false)
        }else if (value === 'Academic') {
            setToggle(true)
        }
    }
    return (
        <section id='Education' className="  py-16 px-6 md:px-20">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h4 className="text-cyan-500   tracking-widest text-sm font-semibold">
                    Education
                </h4>
                <h2 className="text-4xl font-bold mt-2">My Education</h2>
                <p className="text-black/70 dark:text-white/70 mt-4 max-w-2xl mx-auto">
                    Here is a brief overview of my educational background, showcasing my academic journey and achievements.
                </p>
            </div>
 
            <div className="flex justify-center mb-8">
                <div className="  p-1 rounded-full flex items-center gap-2 dark:bg-white/20 bg-black/20 duration-300">
                    <button onClick={() => btnToggle('Academic')} className={`${toggle ? 'bg-cyan-400/90 shadow shadow-white/40  ' : ''}  px-6 py-2 rounded-full transition`}>
                        Academic
                    </button>
                    <button onClick={() => btnToggle('Course')} className={`${toggle ? '' : 'bg-cyan-400/90 shadow shadow-white/40  '}  px-6 py-2 rounded-full transition`}>
                        Course
                    </button>
                </div>
            </div>

            { !toggle ? <CourseCard></CourseCard>
            :<EducationTimeline></EducationTimeline>}
            
        </section>
    );
};

export default Education;