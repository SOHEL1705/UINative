import React from "react";
import "./loader.css";

const Loader: React.FC = () => {
  return (
    <main className="main">

    <div className="loader">
      <svg
        className="text-svg"
        viewBox="0 0 500 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000" />
            <stop offset="50%" stopColor="#777" />
            <stop offset="100%" stopColor="#ccc" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="dash"
          stroke="url(#grayGradient)"
        >
          UINative
        </text>
      </svg>
    </div>
          </main>
  );
};

export default Loader;
