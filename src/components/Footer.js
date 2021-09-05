import React from "react";
import Social from "./Social";

const footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <p className="text-gray-700 text-lg">&#169; 2021. Srijan Kumar Gupta</p>
      <div className="flex">
        <Social />
      </div>
    </footer>
  );
};

export default footer;
