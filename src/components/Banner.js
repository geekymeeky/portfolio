import React from "react";
import Typewriter from "typewriter-effect";
import Social from "./Social";

const Banner = () => {
  const intro = [
    "An Open-Source enthusiast",
    "A Cloud Computing Consultant",
    "A Web Developer Evangelist",
  ];
  return (
    <>
      <section className="flex h-screen" id="home">
        <div className="w-full bg-gradient-to-tr from-black to-gray-800 opacity-80 flex items-center justify-center text-white font-extralight text-3xl">
          <div className="flex-row text-center">
            <p>Hi, I’m Srijan Kumar</p>
            <Typewriter
              options={{
                strings: intro,
                autoStart: true,
                loop: true,
              }}
            />
            <Social className="h-5" iconSize="1x" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
