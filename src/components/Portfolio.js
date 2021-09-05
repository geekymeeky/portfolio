import React from "react";

const Portfolio = () => {
  const projects = [
    {
      name: "JS-games",
      descr: "A curated collection of online games built using Javascript",
      linkTo: "https://github.com/geekymeeky/JS-games",
      imgUrl:
        "https://user-images.githubusercontent.com/66238394/132129408-764b3a6d-f6e8-45a5-b60f-b23db4db5d17.png",
    },
    {
      name: "Mausam",
      descr:
        "A simple flutter weather app that can fetch weather based on the current location or city you specify.",
      linkTo: "https://github.com/geekymeeky/Mausam",
      imgUrl:
        "https://user-images.githubusercontent.com/66238394/132129344-2b225c8e-d585-4bf6-9c79-bb277ea23349.png",
    },
    {
      name: "DataMed",
      descr:
        "A Machine-Learning web platform that predicts severity of Disease",
      linkTo: "https://github.com/geekymeeky/DataMed",
      imgUrl:
        "https://user-images.githubusercontent.com/66238394/132129468-ee5e4728-acdd-4201-bb2e-2665be0447de.png",
    },
    {
      name: "Book Finder",
      descr: "A simple React app that fetches books from Google Books API.",
      linkTo: "https://github.com/geekymeeky/Book-finder",
      imgUrl:
        "https://user-images.githubusercontent.com/66238394/132129515-cf222e3d-184d-4650-a5f6-922166037a20.png",
    },
  ];
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen pb-10 "
      id="portfolio"
    >
      <div className="flex flex-1 items-center flex-col p-12">
        <h1 className="font-medium text-4xl">Portfolio</h1>
        <h5 className="text-gray-700 text-lg">
          Check out my latest and greatest creations
        </h5>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-2">
        {projects.map(({ name, descr, linkTo, imgUrl }) => (
          <div class="container w-80 mx-auto  bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:scale-105 duration-500">
            <img class="w-full" src={imgUrl} alt="" />
            <div class="text-center relative py-14">
              <h1>
                <a
                  href={linkTo}
                  target="_blank"
                  rel="noreferrer"
                  class="mb-1 text-2xl font-sans font-semibold text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  {name}
                </a>
              </h1>
              <span class="text-lg text-gray-700 hover:text-gray-900">
                {descr}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
