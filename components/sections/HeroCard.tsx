import Image from "next/image";
import React from "react";

const HeroCard = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[30vh] md:h-screen relative ">
        <video
          src="/assets/showcase-video.mp4"
          autoPlay
          loop
          muted
          className="rounded-4xl object-cover shadow-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroCard;
