import React from "react";
import styles from "./BendingLine.module.css";

const BentLine = () => {
  return (
    <div className={`${styles.container} p-4 sm:p-2 max-h-screen `}>
      <div>
        <h1 className=" text-5xl md:text-4xl font-bold text-center text-gray-200 mt-6 sm:mt-10 mb-4 sm:mb-6">
          <span className="text-indigo-600">Empowering</span>{" "}
          <span className="text-green-500">Ideas</span> with{" "}
          <span className="text-yellow-500">Technology</span>
        </h1>
        <p className=" text-2xl text-center text-gray-400 mb-6 sm:mb-12">
          Unleashing the full potential of technology to bring your vision to life, securely and innovatively.
        </p>
        <svg
          className={styles.svg}
          viewBox="0 0 800 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 150 Q 350 50 750 150"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="red">
                <animate
                  attributeName="stop-color"
                  values="red;blue;green;yellow;red"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="blue">
                <animate
                  attributeName="stop-color"
                  values="blue;yellow;red;green;blue"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mt-4 sm:mt-6">
        <img
          src="/map.png"
          alt="Map"
          className="w-full max-w-sm sm:max-w-md mx-auto"
        />
      </div>

    </div>
  );
};

export default BentLine;
