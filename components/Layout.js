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
      </Head>
      <Navbar />
      <main className="w-full h-full text-white flex flex-col-reverse lg:flex-row mx-auto max-w-7xl px-5">
        {children}
      </main>
    </div>
  );
};

export default Layout;
