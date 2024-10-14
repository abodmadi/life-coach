/* import React from "react";
import { Link } from "react-router-dom";

export default function Button({text,toPage}) {
  return (
    <Link to={toPage} className="group relative inline-block text-sm sm:text-xl font-elMessiri font-semibold text-redLightGrayish-950 focus:outline-none focus:ring">
      <span className="absolute inset-0 border border-blueVeryDark-600 group-active:border-blueVeryDark-500"></span>
      <span className="block border border-blueVeryDark-600 bg-blueVeryDark-950 px-12 py-3 transition-transform active:border-blueVeryDark-500 active:bg-blueVeryDark-950 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {text}
      </span>
    </Link>
  );
}
 */

import React from "react";
import { Link } from "react-router-dom";

export default function Button({ text, toPage }) {
  return (
    <Link 
      to={toPage} 
      className="group relative inline-block text-sm md:text-base lg:text-xl font-elMessiri font-semibold text-redLightGrayish-950 focus:outline-none focus:ring"
    >
      <span className="absolute inset-0 border border-blueVeryDark-600 group-active:border-blueVeryDark-500"></span>
      <span className="block border border-blueVeryDark-600 bg-blueVeryDark-950 px-6 py-2 md:px-8 md:py-3 lg:px-8 lg:py-2 transition-transform active:border-blueVeryDark-500 active:bg-blueVeryDark-950 group-hover:-translate-x-1 group-hover:-translate-y-1">
        {text}
      </span>
    </Link>
  );
}
