import React, { useEffect, useRef, useState } from "react";
import linkedinIcon from "../assets/images/linkedin.svg";
import xIcon from "../assets/images/twitter-x.svg";
import instagram from "../assets/images/instagram.svg";
import EmailLogo from "../assets/images/email.svg";
import GitLogo from "../assets/images/github.svg";
import Header from "./header";
import logo from "../assets/images/logo.png";
import { runMatter } from "./matter";
import AboutMe from "./Aboutme.jsx";
import LatestWork from "./latestWork.jsx";

const MidSection = () => {
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     runMatter(canvasRef.current);
  //   }
  // }, []);
  const [showAboutMe, setShowAboutMe] = useState(false);
  // const [showLatestWork, setLatestwork] = useState(false);
  return (
    <section className="flex flex-col justify-between h-screen">
      {/* Header Section */}
      <Header />

      {/* Matter.js canvas */}
      {/* <div
        className="fixed inset-0 h-screen w-full hidden md:block"
        ref={canvasRef}
        id="wrapper-canvas"
      ></div> */}

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row lg:-mt-20 relative">
        <div className="max-w-screen-xl mx-auto w-full px-4 flex flex-col items-center lg:items-start lg:ml-14">
          {/* Logo Image */}
          <img
            className="h-36 w-36 sm:h-48 sm:w-48 lg:h-96 lg:w-96 absolute top-12 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-1/4 lg:-translate-x-1/2 -translate-y-20 opacity-80 lg:opacity-100 pointer-events-none"
            src={logo}
            alt="Logo"
          />
          <div className="relative p-6 lg:ml-16 text-center lg:text-left mt-20 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold pointer-events-none">
              Satyam Maurya
            </h1>
            <p className="font-serif italic mb-8 pointer-events-none">
              MERN Stack Developer.
            </p>
            <button
              className="font-[Nunito] bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group"
              onClick={() => setShowAboutMe(!showAboutMe)}
            >
              About Me
              <svg
                fill="#fff"
                height="44"
                width="44"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
                className="absolute top-1/2 -translate-y-1/2 -right-7 group-hover:-right-9 ease-in-out duration-100 group opacity-80"
              >
                <path
                  id="XMLID_27_"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                />
              </svg>
            </button>
            {showAboutMe && <AboutMe />}
          </div>
        </div>

        {/* Social Media Icons */}
        {/* Social Media Icons */}
        <ul className="flex flex-col space-y-7 absolute right-4 top-16 lg:right-16 lg:top-7">
          <a href="https://www.linkedin.com/in/thesatyammaurya">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img
                className="w-6 sm:w-6 lg:w-7"
                src={linkedinIcon}
                alt="LinkedIn"
              />
            </li>
          </a>
          <a href="https://x.com/sa9451736205">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img className="w-6 sm:w-6 lg:w-7" src={xIcon} alt="Twitter/X" />
            </li>
          </a>
          <a href="https://www.instagram.com/satyam_maurya_61">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img
                className="w-6 sm:w-6 lg:w-7"
                src={instagram}
                alt="Instagram"
              />
            </li>
          </a>
          <a href="mailto:sa9451736205@gmail.com">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img className="w-6 sm:w-6 lg:w-7" src={EmailLogo} alt="Email" />
            </li>
          </a>
          <a href="https://github.com/SatyamMauryakit">
            <li className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <img className="w-6 sm:w-6 lg:w-7" src={GitLogo} alt="GitHub" />
            </li>
          </a>
        </ul>
      </div>

      {/* Button Section */}
      <div className="text-center mt-8">
        <div className="relative after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] self-center after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
          <button
            className="font-[Nunito] bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20 "
            // onClick={() => setLatestwork(!showLatestWork)}
          >
            Latest Works
            <svg
              fill="#fff"
              height="44"
              width="44"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xml:space="preserve"
              className="absolute rotate-90 left-1/2 -translate-x-1/2 top-9 group-hover:top-11 ease-in-out duration-100 group opacity-80"
            >
              <path
                id="XMLID_27_"
                d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
              />
            </svg>
          </button>
          {/* {showLatestWork && <LatestWork />} */}
        </div>
      </div>
    </section>
  );
};

export default MidSection;
