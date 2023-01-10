import React from "react";
import Image from "next/image";

export default function MeLogo() {
  return (
    <>
      <div className="flex justify-center p-5 md:h-96 md:w-96 mx-auto">
        <Image
          alt="denny-icon-profile"
          property="content"
          width={200}
          height={200}
          className="md:h-96 md:w-96 mx-auto"
          src={
            "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo2LCJub3NlIjozLCJtb3V0aCI6MTEsImV5ZXMiOjQsImV5ZWJyb3dzIjo0LCJnbGFzc2VzIjoxNCwiaGFpciI6NSwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjoxMiwiZmxpcCI6MCwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ=="
          }
        />
      </div>
    </>
  );
}
