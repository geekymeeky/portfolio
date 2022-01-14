import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <section className="flex-row items-center p-14" id="about">
      <h3 className="text-4xl text-center">About</h3>
      <h3 className="font-extrabold underline text-xl text-center py-4">
        Let me introduce myself
      </h3>
      <div className="flex flex-col md:flex-row">
        <img
          src="https://github.com/geekymeeky.png?size=200"
          alt="avatar"
          className="rounded-full"
        />
        <p className="px-8 font-medium">
          Hi, I'm Srijan Kumar Gupta, an undergraduate student, currently
          pursuing Btech. course in Computer Science and Engineering at Calcutta
          Institute of Engineering and Management. <br />
          <br />
          Taking web development as a profession not only fulfils my pocket but
          also my heart because it has been my passion since my early teenage. I
          believe that people should do things in which they are good at or in
          which their heart lays.
          <br />
          <br />
          Email: gupta.srijan94@gmail.com
          <br /> Phone: (+91) 9051798378
        </p>
      </div>
      <Skills />
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/srijankrgupta/"
          className="inline-block uppercase mx-auto shadow bg-black hover:bg-white hover:text-black focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
        >
          View Profile
        </a>
      </div>
    </section>
  );
};

export default About;
