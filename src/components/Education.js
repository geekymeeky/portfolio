import React from "react";
import Cap from "../assets/GraduationCap.svg";

const Education = () => {
  const edu = [
    {
      year: "2020 - Present",
      discipline: "BTech. (Computer Science and Engineering)",
      institute: "Calcutta Institute of Engineering and Management",
    },
    {
      year: "2019",
      discipline: "PCMB",
      institute: "The Scottish Church Collegiate School",
    },
  ];
  return (
    <section
      id="education"
      className="flex flex-col items-center min-h-screen bg-purple-500"
    >
      <div className="flex flex-col">
        <h2 className="pt-10 text-4xl text-center text-white font-medium">
          Education
        </h2>
        <h5 className="text-white font-mono pt-3">This is what I'm made of</h5>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="grid grid-cols-3 items-center justify-items-center">
          {edu.map(({ year, discipline, institute }, index) => (
            <React.Fragment key={index}>
              <p className="p-14 italic font-bold">{year}</p>
              <div>
                <img src={Cap} alt="Cap" className="h-12" />
              </div>
              <p className="text-left min-w-full font-semibold">
                {discipline}
                <br />
                <em className="text-sm font-semibold">{institute}</em>
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
