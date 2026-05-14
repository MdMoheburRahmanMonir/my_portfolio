'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

  const ProjectsSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;


    const projectsData = [
        {
            id: 1,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: '/myPhoto1.png'
        },
        {
            id: 2,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 5,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 6,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 7,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 8,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 9,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
        {
            id: 10,
            title: 'Crypto App Landing Page',
            category: 'Web App',
            description: 'A fully responsive cryptocurrency landing page with real-time price tracking and modern UI.',
            technologies: ['React', 'Tailwind', 'Framer Motion'],
            github: 'https://github.com/your-username/repo',
            live: 'https://your-live-demo.com',
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004009?q=80&w=600&auto=format&fit=crop'
        },
         
    ];

    const totalPages = Math.ceil(projectsData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projectsData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section id='myProject' className="py-5 px-6 ">
            <div className="max-w-7xl   mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Recent Works</h2>
                    <p className="  dark:bg-white/15 w-fit rounded-full bg-black/15     shadow-2xl   py-1 flex mx-auto px-4 mt-3  ">Page {currentPage} of {totalPages}</p>
                </div>

                {/* Projects Grid */}
                <div className="min-h-[800px] mb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10"
                        >
                            {currentProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-black/5 dark:bg-white/5 backdrop-blur-[7px] rounded-[2.5rem] p-5 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all"
                                >
                                    {/* Image Section */}
                                    <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="px-4">
                                        <span className="text-xs font-bold text-red-500 uppercase tracking-widest">{project.category}</span>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{project.title}</h3>

                                        {/* Description */}
                                        <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Technologies Array */}
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buttons Section */}
                                        <div className="flex items-center gap-4 mt-6 pb-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                                            >
                                                <FiGithub /> GitHub
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                            >
                                                <FiExternalLink /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Counter */}
                <div className="flex justify-center items-center gap-3">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={`w-12 h-12 rounded-2xl font-bold transition-all ${currentPage === number
                                    ? 'bg-black text-white dark:bg-blue-600'
                                    : 'bg-gray-100 text-gray-400 dark:bg-gray-800'
                                }`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;