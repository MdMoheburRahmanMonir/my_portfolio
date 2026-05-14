import { FiBriefcase, FiCheckCircle, FiHeadphones } from 'react-icons/fi';
import { Divmotion, ResumeMotion } from './Motion';

const AboutMe = () => {
    const stats = [
        { id: 1, title: 'Experience', subtitle: '1 Years Working', icon: <FiBriefcase /> },
        { id: 2, title: 'Completed', subtitle: '30+ Projects', icon: <FiCheckCircle /> },
        { id: 3, title: 'Support', subtitle: 'Online 24/7', icon: <FiHeadphones /> },
    ];

    return (
        <section className="py-20 px-6 w-full mx-auto   relative" id='aboutMe'>

            <div className='w-11/12 mx-auto  '>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold  ">About Me</h2>
                    <p className="text-white/70 mt-2">My Introduction</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-6">
                    <Divmotion />
                    <div className="flex flex-col self-center justify-self-center">
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {stats.map((stat) => (
                                <div
                                    key={stat.id}
                                    className="flex flex-col items-center justify-center bg-black/5 p-4 hover:shadow-black/40 hover:dark:shadow-white/40 dark:bg-white/5 border border-gray-100/20 hover:scale-105 shadow-white/20 rounded-2xl shadow-lg hover:shadow-md transition-shadow text-center"
                                >
                                    <span className="text-xl text-gray-800 dark:text-cyan-400 mb-2 ">{stat.icon}</span>
                                    <h3 className="text-sm font-bold  ">{stat.title}</h3>
                                    <p className="text-[10px]  ">{stat.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        <p className="  leading-7 tracking-wide  mb-8 ">
                            Proficient in React.js, Next.js, Redux, Node.js, and Docker, I build scalable, high-performance applications.
                            Skilled in Prisma, Socket.IO, and Kubernetes, with expertise in MongoDB, PostgreSQL, and CI/CD pipelines,
                            I deliver innovative real-time systems and impactful solutions.
                        </p>
                        <ResumeMotion />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;