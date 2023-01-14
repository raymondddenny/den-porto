import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// TODO: add darkmode
export default function Navbar(props: Props) {
  return (
    <nav className="py-8 mb-12 flex justify-between md:max-w-md mx-auto md:items-end">
      <h1 className="text-xl font-overpass dark:text-[#EBE6E6] md:text-3xl">
        Hi There.
      </h1>
      <ul className="flex items-center space-x-5">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl dark:text-[#EBE6E6]"
            onClick={props.toggleDarkMode}
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-orange-400 to-red-600 p-2 rounded-md"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
