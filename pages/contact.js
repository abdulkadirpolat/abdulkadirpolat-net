import React, { useState } from "react";
import { Layout } from "../components/index";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^\w+([.-]\w+)*@\w+([.-]\w+)*(\.\w{2,})/;

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formValues = {
    //     name,
    //     lastName,
    //     email,
    //     message,
    //   };
    // // Checking the email before submitting
    // if (email !== "") {
    //   var validEmail = emailRegex.test(email);
    //   if (!validEmail) {
    //     alert("Please enter a valid email address");
    //     setLoadingStatus(false);
    //     return false;
    //   }
    // }

    // setLoadingStatus(true)
    // if (name !== "" && email !== "") {
    //   loginHelper({
    //     email: email.trim().toLowerCase(),
    //     name: name,
    //   });
    // } else if (lastName !== "") {
    //   loginHelper({
    //     last_name: password,
    //   });
    // }
  };

  return (
    <Layout>
      <div class="w-full mx-auto first-letter: h-full">
        <div class="h-80"></div>
        <div class="max-w-5xl mx-auto sm:px-6 lg:px-8 mb-12">
          <div class="bg-gray-900 bg-opacity-80 w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center text-white">
              Contact me
            </p>
            <form onSubmit={handleSubmit} action="" method="post">
              <div class="md:flex items-center mt-12">
                <div class="w-full md:w-1/2 flex flex-col">
                  <label class="font-semibold leading-none text-gray-300">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
                <div class="w-full md:w-1/2 flex flex-col mt-4 md:ml-4 md:m-0">
                  <label class="font-semibold leading-none text-gray-300">
                    Last name
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
              </div>
              <div class="md:flex items-center mt-8">
                <div class="w-full flex flex-col">
                  <label class="font-semibold leading-none text-gray-300">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    class="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"
                  />
                </div>
              </div>
              <div>
                <div class="w-full flex flex-col mt-8">
                  <label class="font-semibold leading-none text-gray-300">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    class="h-32 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"
                  ></textarea>
                </div>
              </div>
              <div class="flex items-center justify-center w-full">
                <button class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-space-cadet rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
