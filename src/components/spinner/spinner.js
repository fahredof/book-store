import React from "react";
import "./spinner.css";
import spinner from "./svg/spinner.svg"

const Spinner = () => {
    return (
      <div className="spinner">
          <img src={spinner} alt="loading"/>
      </div>
    );
};

export default Spinner;