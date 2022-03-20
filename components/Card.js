import React from "react";
import {
  AiOutlineStar,
  AiOutlineFileText,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";

const Card = ({ data }) => {
  return data.description === "!except" ||
    data.description === null ||
    data.language === null ? null : (
    <li className="bg-space-cadet p-3 rounded-md flex flex-col h-full">
      <span className="flex justify-between items-center">
        <span>
          <h1 className="font-medium">{data.name}</h1>
          <h2 className="text-xs text-gray-300">abdulkadirpolat/{data.name}</h2>
        </span>
        <span className="flex items-center px-2 py-1 bg-white text-gray-600 rounded">
          <AiOutlineStar className="mr-1 text-lg text-gray-2" />
          <span className="text-sm font-semibold text-gray-3">
            {data.stargazers_count}
          </span>
        </span>
      </span>
      <p className="mt-1 text-white">
        <AiOutlineFileText className="inline-block pr-1 text-xl pb-1" />
        <span>
          {data.description
            ? `${
                data.description.length > 45
                  ? data.description.slice(0, 45) + "..."
                  : data.description
              }`
            : null}
        </span>
      </p>
      <div className="text-gray-600 flex items-center justify-between my-2">
        <div className="flex items-center bg-white px-2 py-1 rounded-md">
          <span className="inline-block pr-1">
            <BiCodeAlt className="text-gray-2" />
          </span>
          {data.language}
        </div>
        <div className="text-sm text-white">
          Updated {data.updated_at ? data.updated_at.slice(0, 10) : null}
        </div>
      </div>
      <div className="flex text-gray-700 self-center">
        <a
          className="bg-white rounded-md px-2 py-1 mx-2"
          href={data.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineGithub className="text-gray-2 text-lg inline-block mr-1" />
          source
        </a>

        <a
          className={`bg-white rounded-md px-2 py-1 ${
            data.homepage
              ? ""
              : "opacity-30 cursor-default pointer-events-none select-none"
          }`}
          target="_blank"
          rel="noopener noreferrer"
          href={data.homepage}
        >
          <BsLink className="text-gray-2 text-lg inline-block mr-1" />
          Preview
        </a>
      </div>
    </li>
  );
};

export default Card;
