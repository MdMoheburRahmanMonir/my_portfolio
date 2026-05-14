'use client';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineChatAlt2 } from 'react-icons/hi';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactOptions = [
    {
      id: 1,
      icon: <HiOutlineMail />,
      title: 'Email',
      value: 'mailto:mdmohiburrahmanmanik@gmail.com',
      link: 'https://mail.google.com',
    },
    {
      id: 2,
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '01887344542',
      link: 'https://web.whatsapp.com/',
    },
    {
      id: 3,
      icon: <FaTelegramPlane />,
      title: 'Messenger',
      value: '@mdmoheburrahmanmonir',
      link: 'https://t.me/mdmoheburrahmanmonir',
    },
  ];

  return (
    <section id='Contact' className="py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ">Get in touch</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2 italic">Contact Me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-12">

          {/* Left Side: Contact Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">Talk to me</h3>
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:scale-105 space-y-1 relative dark:bg-white/5 bg-black/2 backdrop-blur-[8px] border-2 overflow-hidden p-6 rounded-[1.5rem] text-center shadow-sm hover:shadow-md shadow-black/30 dark:shadow-white/25 transition-all group"
              >
                <div className='absolute w-[40%] h-[20%] top-15 duration-300 delay-300 left-30 blur-[90px] hidden group-hover:block -z-10 bg-cyan-600'></div>
                <div className="text-3xl text-gray-800 dark:text-blue-500 flex justify-center mb-2 group-hover:scale-110 transition-transform">
                  {option.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">{option.title}</h4>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">{option.value}</p>
                <a
                  href={option.link}
                  target="_blank"
                  className="text-md font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-blue-400  inline-flex items-center gap-1"
                >
                  Write me <FiSend className="text-xs group-hover:scale-110 group-hover:" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">Write me your project</h3>
            <form className="space-y-6 ">
              {/* Name Input */}
              <div className="relative ">
                <label className="absolute -top-2 rounded-full  left-5 px-5 text-sm  z-10">Name</label>
                <input
                  type="text"
                  placeholder="Insert your name"
                  className=" w-full p-5 bg-transparent -black/5 dark:bg-white/5 border-2 border-black/10  dark:border-white/20 shadow-lg dark:shadow-white/10 shadow-black/10 rounded-[1.2rem] outline-none focus:border-gray-300 dark:focus:border-blue-500 transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="absolute -top-2 rounded-full left-5 px-5 text-sm z-10">Email</label>
                <input
                  type="email"
                  placeholder="Insert your email"
                  className=" w-full p-5 bg-transparent -black/5 dark:bg-white/5 border-2 border-black/10  dark:border-white/20 shadow-lg dark:shadow-white/10 shadow-black/10 rounded-[1.2rem] outline-none focus:border-gray-300 dark:focus:border-blue-500 transition-all text-gray-900 dark:text-white"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <label className="absolute -top-2 rounded-full left-5 px-5 text-sm z-10">Project</label>
                <textarea
                  rows="10"
                  placeholder="Write your project"
                  className=" w-full p-5 bg-transparent -black/5 dark:bg-white/5 border-2 border-black/10  dark:border-white/20 shadow-lg dark:shadow-white/10 shadow-black/10 rounded-[1.2rem] outline-none focus:border-gray-300 dark:focus:border-blue-500 transition-all text-gray-900 dark:text-white"
                ></textarea>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className=" group relative overflow-hidden  bg-cyan-600/70 text-white px-10 py-5 w-full justify-center rounded-[1.2rem] font-bold flex items-center gap-3 hover:shadow-lg transition-all"
              >
                <motion.span
                  initial={{ x: -100, rotate: 45 }}
                  animate={{ x: 700, rotate: 45 }}
                  whileHover={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: 2,
                    repeatDelay: 2,
                    ease: "linear",
                  }}
                  className="absolute w-10 h-[300%] group-hover:hidden bg-white blur-lg -top-18 left-0 "
                />
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;