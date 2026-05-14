'use client';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineTerminal, HiOutlineDatabase, HiOutlineSparkles, HiOutlineColorSwatch, HiOutlineDeviceMobile } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Frontend Development',
            icon: <HiOutlineCode />,
            description: 'Building beautiful, responsive, and high-performance user interfaces using React and Next.js.'
        },
        {
            id: 2,
            title: 'Backend Development',
            icon: <HiOutlineTerminal />,
            description: 'Developing scalable server-side logic, REST APIs, and database management with Node.js.'
        },
        {
            id: 3,
            title: 'Full Stack Development',
            icon: <HiOutlineDatabase />,
            description: 'End-to-end web solutions integrating both frontend and backend seamlessly.'
        },
        {
            id: 4,
            title: 'Mobile Hybrid App',
            icon: <HiOutlineDeviceMobile />,
            description: 'Creating cross-platform mobile applications using React Native or hybrid technologies.'
        },
        {
            id: 5,
            title: 'UI/UX Prototype',
            icon: <HiOutlineColorSwatch />,
            description: 'Designing user-centric wireframes and interactive prototypes for better user experience.'
        },
        {
            id: 6,
            title: 'API Development',
            icon: <HiOutlineSparkles />,
            description: 'Building secure and efficient APIs to power web and mobile applications.'
        },
    ];

    return (
        <section id='Services' className="py-6 px-6 relative   transition-colors duration-300">
             
            <div className="max-w-6xl mx-auto">

                {/* Section Header Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Services</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 italic">What I offer</p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{
                                duration: 0.5,
                                delay: index * 0.2  
                            }}
                             
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.1 }
                            }}
                            className="group p-8 bg-gray-200/10 relative   border   rounded-[2rem] shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all cursor-pointer"
                        > 
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="text-4xl text-slate-800 dark:text-blue-400 mb-6"
                            >
                                {service.icon}
                            </motion.div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>

                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                {service.desc}
                            </p>

                            <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                View More
                                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;