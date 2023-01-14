import Link from "next/link";
import React from "react";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import MeLogo from "./MeLogo";

export default function IntroMe() {
  return (
    <>
      <div className="text-center p-10 py-4">
        <h2 className="text-4xl text-orange-400 font-medium md:text-6xl">
          Denny Raymond
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-[#EBE6E6]">
          Software Engineer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-[#EBE6E6] md:text-xl max-w-xl mx-auto">
          A versatile software engineer with mobile and web experience. Fueled
          by a passion for photography and a drive to learn.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-6 py-3 text-gray-500 dark:text-[#EBE6E6]">
        <Link
          href={"https://twitter.com/raymonddenny14"}
          className="hover:text-blue-400"
        >
          <AiFillTwitterCircle />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/denny-raymond-16636b196/"}
          className="hover:text-blue-700"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          href={"https://github.com/raymondddenny"}
          className="hover:text-black"
        >
          <AiFillGithub />
        </Link>
      </div>
      {/* <MeLogo /> */}
    </>
  );
}
