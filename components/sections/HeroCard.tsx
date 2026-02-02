import Image from "next/image";
import React from "react";

const HeroCard = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[30vh] md:h-screen relative ">
        <Image
          src="/assets/project-showcase.png"
          alt="hero-card"
          fill
          className="rounded-4xl object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroCard;
