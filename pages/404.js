import React from "react";
import Link from "next/link";
import { Layout } from "../components/index";

const NotFound = () => {
  return (
    <Layout>
      <div className="text-white w-full flex flex-col items-center justify-center h-96">
        <p className="text-4xl my-6">Page not found</p>
        <Link href="/">
          <a className="text-2xl hover:bg-space-cadet p-2 w-60 text-center">
            Back to home
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
