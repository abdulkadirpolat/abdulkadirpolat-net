import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "./index";

const Layout = ({ children }) => {
  const router = useRouter();
  // useEffect(() => {
  //   const currentLanguage = window.navigator.language.split("-")[0];
  //   localStorage.setItem("language", currentLanguage);
  // }, []);
  const headPathnames = ["/", "/404"];

  return (
    <div className="w-full min-h-screen bg-gunmetal font-sans">
      <Head>
        <title>
          {headPathnames.includes(router.pathname)
            ? "Abdulkadir"
            : router.pathname.slice(1)[0].toUpperCase() +
              router.pathname.slice(2)}
        </title>
        <meta property="og:title" content="My page title" key="title" />
        <meta
          name="description"
          content="Abdulkadir Polat, I am a Frontend Developer living in Istanbul, Turkey. I produce modern web applications and learn new technologies. javascript, react, next..."
        />
      </Head>
      <Navbar />
      <main className="w-full pt-20 h-full text-white flex flex-col-reverse lg:flex-row mx-auto max-w-7xl px-2 sm:px-5 z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
