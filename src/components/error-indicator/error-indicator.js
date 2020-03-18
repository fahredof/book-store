import React from "react";
import "./error-indicator.css";
import Error from "./image/error.jpg";

const ErrorIndicator = () => {
    return (
        <div className="jumbotron d-flex flex-column justify-content-center">
            <h3>Ooops... Something goes wrong</h3>
            <img className="img-error" src={Error} alt="cat"/>
        </div>
    );
};

export default ErrorIndicator;