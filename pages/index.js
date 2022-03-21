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
      <div className="w-full pt-28 pb-4 text-center lg:text-left">
        <p className="text-2xl">HI THERE !</p>
        <span className="text-4xl font-light"> I'M </span>
        <span className="font-semibold text-4xl leading-tight uppercase mb-5">
          Abdulkadir Polat
        </span>
        <hr className="max-w-sm mt-5 mx-auto lg:mx-0" />
        <p className="text-2xl py-3">Frontend Developer</p>
        <hr className="max-w-sm mx-auto lg:mx-0" />
        <div className="flex justify-between max-w-xs my-8 lg:pr-16 mx-auto lg:mx-0">
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
          onClick={() => {
            window.open(
              "https://flowcv.io/resume/feedback/FjUWa5y7kA2A",
              "_blank"
            );
          }}
          className="cursor-pointer max-w-sm text-center hover:bg-space-cadet hover:text-white
         group py-3 px-8 hover:no-underline underline mx-auto lg:mx-0"
        >
          <span
            className="font-bold 
              bg-transparent hover:bg-opacity-40 w-full group-hover:text-white"
          >
            Resume
          </span>
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
