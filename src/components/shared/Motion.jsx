"use client"
import { motion } from 'framer-motion'; 
  import {   toast } from 'react-toastify';
export const Divmotion = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
        >
            <div className="relative w-96 h-96 rounded-full ">
                {/* Replace with your actual image path */}
                <img
                    src="/about2.png"
                    alt="Profile"
                    className="w-full h-full bottom-0  absolute object-cover"
                />
            </div>
        </motion.div>
    );
};

export const ResumeMotion = () => {

    return (
        <motion.a
            href="/MyResume.pdf"
            target='_blank'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-fit relative flex group overflow-hidden items-center gap-2 bg-cyan-600/80 px-8 py-4 rounded-2xl font-medium shadow-lg hover:bg-cyan-400 transition-colors"
            onClick={() => toast('hello')}
        >
            <motion.span
                initial={{ x: -45, rotate: 45 }}
                animate={{ x: 280, rotate: 45 }}
                whileHover={{ opacity: 0 }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: 2,
                    repeatDelay: 2,
                    ease: "linear",
                }}
                className="absolute w-5 h-[200%] group-hover:hidden bg-white blur-lg -top-8 left-0 "
            />
            Download Resume
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        </motion.a>
    )
}
 