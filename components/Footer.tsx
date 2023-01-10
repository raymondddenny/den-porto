import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-4">
      <p className="flex items-center justify-center md:text-2xl">
        Made with <FaHeart className="text-red-500 ml-2" />
      </p>
    </footer>
  );
}
