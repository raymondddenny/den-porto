import React from "react";
import Image from "next/image";
// import MeAvatar from "../public/myAvatar.svg";
import myAvatar from "/myAvatar.png";

export default function MeLogo() {
  return (
    <>
      {/* <Image
          alt="denny-icon-profile"
          property="content"
          width={200}
          height={200}
          className="md:h-96 md:w-96 mx-auto"
          src={
            "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjozLCJtb3V0aCI6MTEsImV5ZXMiOjQsImV5ZWJyb3dzIjo0LCJnbGFzc2VzIjoxNCwiaGFpciI6NSwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjoxMiwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ=="
          }
        /> */}
      <Image
        src="/myAvatar.png"
        alt="me"
        width="0"
        height="0"
        sizes="100vw"
        className="flex justify-center h-auto w-5 p-5 md:h-50 md:w-50 mx-auto"
      />
    </>
  );
}
