// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa'; // Import FaTwitterSquare
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from 'react-icons/io'; // Import IoMdCall
import { SiInstagram } from 'react-icons/si'; // Import SiInstagram
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() { 
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {
          (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) ? <ContactWithCaptcha />
            : <ContactWithoutCaptcha />
        }

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
           <div className="my-12 flex items-center gap-5">
                      <Link
                        href={personalData.github}
                        target="_blank"
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                      >
                        <BsGithub size={30} />
                      </Link>
                      <Link
                        href={personalData.linkedIn}
                        target="_blank"
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                      >
                        <BsLinkedin size={30} />
                      </Link>
                      <Link
                        href={personalData.facebook}
                        target="_blank"
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                      >
                        <FaFacebook size={30} />
                      </Link>
                      <Link
                        href={personalData.instagram}
                        target="_blank"
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                      >
                        <SiInstagram size={30} />
                      </Link>
          
                      <Link
                        href={personalData.twitter}
                        target="_blank"
                        className="transition-all text-pink-500 hover:scale-125 duration-300"
                      >
                        <FaTwitterSquare size={30} /> {/* Fixed icon */}
                      </Link>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
