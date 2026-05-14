import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { PiGithubLogoFill } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="  border-t border-gray-100 dark:border-gray-800 py-3 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="flex gap-4 mb-3">
          <a href="https://github.com/MdMoheburRahmanMonir" target="_blank">
            <PiGithubLogoFill className="hover:text-black text-black text-3xl hover:scale-125 dark:text-white/90 cursor-pointer transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/md-mohebur-rahman-monir/" target="_blank">
            <FaLinkedin className="hover:text-[#0A66C2] text-[#0A66C2] text-3xl hover:scale-125 cursor-pointer transition-colors" />
          </a>
          <a href="https://x.com/MohiburMd2288" target="_blank">
            <BsTwitter className="hover:text-cyan-400  text-cyan-400  text-3xl hover:scale-125 cursor-pointer transition-colors" />
          </a>
          <a href="https://web.facebook.com/mdmohiburrahmanmanik0" target="_blank">
            <FaFacebook className="hover:text-[#1877F2]  text-[#1877F2] text-3xl hover:scale-125 cursor-pointer transition-colors" />
          </a> 
          <a href="https://t.me/mdmoheburrahmanmonir" target="_blank">
            <FaTelegramPlane className="hover:text-[#0088CC] text-[#0088CC] text-3xl hover:scale-125 cursor-pointer transition-colors" />
          </a>
        </div>
 
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          &#169; {new Date().getFullYear()} Mohebur Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;