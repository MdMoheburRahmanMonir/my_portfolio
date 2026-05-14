'use client';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiCalendar } from 'react-icons/hi';

const EducationTimeline = () => {
    const educationData = [
        {
            id: 1,
            title: 'Graduate JSC (Junior School Certificate)',
            subtitle: 'Tengra High School',
            date: '2012-2015',
        },
        {
            id: 2,
            title: 'Graduate SSC (Secondary School Certificate)',
            subtitle: 'Tengra High School ',
            date: ' 2015-2017',
        },
        {
            id: 3,
            title: 'Graduate HSC (Higher School Certificate)',
            subtitle: 'SamujAli High School & College',
            date: '2017 - 2019',
        },
        {
            id: 4,
            title: 'Graduate BA (Bachelor of Arts)',
            subtitle: 'Dowarabazar Degree College',
            date: '2020 - 2023',
        },
    ];

    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <div className="relative">
                {educationData.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={item.id} className="grid grid-cols-[1fr_max-content_1fr] gap-x-4 md:gap-x-10">

                            {isEven ? (
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-right pb-12"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</span>
                                    <div className="flex items-center justify-end gap-1 text-xs text-gray-400 mt-2">
                                        <HiCalendar /> {item.date}
                                    </div>
                                </motion.div>
                            ) : (
                                <div></div>
                            )}

                            <div className="flex flex-col items-center">
                                {/* Round Dot */}
                                <span className="w-4 h-4 bg-gray-800 dark:bg-cyan-500 dark:border-2 dark:border-white rounded-full z-10 border-4 border-white dark:border-slate-900 shadow-sm"></span>
                                {/* Vertical Line (Don't show for the last item) */}
                                {index !== educationData.length - 1 && (
                                    <span className="w-[2px] h-full bg-gray-200 dark:bg-gray-700"></span>
                                )}
                            </div>
                            {!isEven ? (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-left pb-12"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</span>
                                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                                        <HiCalendar /> {item.date}
                                    </div>
                                </motion.div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EducationTimeline;