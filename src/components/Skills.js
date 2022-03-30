import React from "react";

const Skills = () => {
  const skills = [
    {
      lang: "HTML",
      prcnt: "90%",
    },
    {
      lang: "CSS",
      prcnt: "75%",
    },
    {
      lang: "ReactJS",
      prcnt: "72%",
    },
    {
      lang: "Python",
      prcnt: "85%",
    },
    {
      lang: "Google Cloud",
      prcnt: "85%",
    },
  ];
  return (
    <div
      className="flex flex-col justify-center items-center"
      data-aos="flip-up"
      data-aos-duration="500"
      data-aos-delay="500"
    >
      <div className="flex-1 flex justify-center items-center font-semibold underline text-2xl">
        Skills
      </div>
      <div className="flex">
        <div className="flex flex-1 flex-col p-14">
          {skills.map(({ lang, prcnt }) => (
            <div className="relative pt-1" key={lang}>
              <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  {lang}
                </span>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: prcnt }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 font-semibold p-14">
          My education background and my passion towards coding allowed me to
          thrive in this career
          <br />
          <br /> I aquired a quite good knowledge in this domain and have
          working experience on Linux platform as well. <br />
          <br />I always love to learn more things, and prefer to work in a
          team.
          <br />
          <br />
          Thank You.
        </div>
      </div>
    </div>
  );
};

export default Skills;
