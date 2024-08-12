"use client";

import React, { useState, useEffect } from "react";
import bannerImage from "../public/assets/About_Vector.png";
import Image from "next/image";
import AboutVector from "../public/assets/About_Vertical_Vector.png";
// import Navbar from "./components/Navbar";

export default function Home() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Set the initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileOrTablet = width <= 768; // Define your breakpoint

  return (
    <div
      className={`flex flex-col min-h-screen bg-cover bg-center ${
        isMobileOrTablet ? "bg-About_Mobile" : "bg-About_Desktop"
      }`}
    >
      {/* <Navbar /> */}
      <div className="flex items-center justify-center flex-grow flex-col md:flex-row">
        <div className="flex items-center pb-10 md:pb-20">
          <div className="mr-0 md:mr-5">
            <Image
              src={AboutVector}
              width={isMobileOrTablet ? 150 : 0} // Adjust width for mobile/tablet
              height={isMobileOrTablet ? 150 : 190} // Adjust height for mobile/tablet
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1
              className={`text-white ${
                isMobileOrTablet ? "text-4xl" : "text-7xl"
              }`}
            >
              About us
            </h1>
            <p
              className={`text-white ${
                isMobileOrTablet ? "text-sm" : "text-md"
              } justify-content`}
            >
              We are a dedicated team of five individuals
              <br /> with expertise in artificial intelligence,
              <br /> mathematics, education, and software development.
              <br />
              We are a dynamic team of five passionate individuals dedicated
              <br />
              to revolutionizing education through innovative technology.
              <br />
            </p>
          </div>
        </div>
        <div className="ml-0 md:ml-20 pl-0 md:pl-20 mt-5 pb-10 md:pb-20">
          <Image
            src={bannerImage}
            width={isMobileOrTablet ? 250 : 400} // Adjust width for mobile/tablet
            height={isMobileOrTablet ? 250 : 400} // Adjust height for mobile/tablet
          />
        </div>
      </div>
    </div>
  );
}
