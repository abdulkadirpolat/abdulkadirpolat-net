import React from "react";
import { Layout } from "../components/index";

import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import profileImg from "../public/profile.jpg";
import Image from "next/image";

const Home = () => {
  const links = [
    {
      href: "https://twitter.com/abdulkadrplt",
      icon: <AiOutlineTwitter />,
    },
    {
      href: "https://www.instagram.com/kad1r_29",
      icon: <AiFillInstagram />,
    },
    {
      href: "https://www.linkedin.com/in/abdulkadir-polat",
      icon: <AiFillLinkedin />,
    },
    {
      href: "https://github.com/abdulkadirpolat",
      icon: <AiOutlineGithub />,
    },
    {
      href: "https://t.me/abdulkadirplt",
      icon: <FaTelegram />,
    },
  ];
  return (
    <Layout>
      <div className="w-full pt-28 text-center lg:text-left">
        <p className="text-2xl">HI THERE !</p>
        <span className="text-4xl font-light"> I'M </span>
        <span className="font-semibold text-4xl leading-tight uppercase mb-5">
          Abdulkadir Polat
        </span>
        <hr className="w-96 mt-5 mx-auto lg:mx-0" />
        <p className="text-2xl py-3">Frontend Developer</p>
        <hr className="w-96 mx-auto lg:mx-0" />
        <div className="flex justify-between w-64 my-8 mx-auto lg:mx-0">
          {links.map((item, index) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-gray-1"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div
          className="w-96 text-center hover:bg-space-cadet hover:text-white
         group py-3 px-8 hover:no-underline underline mx-auto lg:mx-0"
        >
          <a
            href="https://flowcv.io/resume/feedback/FjUWa5y7kA2A"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold 
              bg-transparent hover:bg-opacity-40 w-full group-hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="lg:w-9/12 w-auto mx-auto mt-16">
        <Image
          src={profileImg}
          alt="profile"
          className="w-full h-full rounded-xl"
          width={400}
          height={400}
          priority
        />
      </div>
    </Layout>
  );
};
// Home.getInitialProps = async (ctx) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();
//   return { stars: json.stargazers_count };
// };

export default Home;
