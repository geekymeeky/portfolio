import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="bg-black">
      <h2 className="pt-4 text-4xl text-center text-yellow-500 font-medium">
        Experience
      </h2>

      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-500">
              <h3 className="font-semibold text-xl mb-1 text-yellow-500">
                Fellow
              </h3>
              <p className="text-gray-600">Script Foundation</p>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-600 rounded-full bg-gray-100 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-600 rounded-full bg-gray-100 shadow"></div>
            </div>

            <div className="col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-500 rounded-xl">
              <h3 className="font-semibold text-xl mb-1 text-yellow-500">
                Program Admin
              </h3>
              <p className="text-gray-600">DevIncept</p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-500">
              <h3 className="font-semibold text-xl mb-1 text-yellow-500">
                Development Lead
              </h3>
              <p className="text-gray-600">Google Developer Students Club</p>
            </div>

            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-0.5 bg-gray-100 pointer-events-none"></div>
              </div>

              <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-indigo-600 rounded-full bg-gray-100 shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
