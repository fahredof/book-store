import React from "react";
import "./footer.css";
import GitHubIcon from "./svg/iconmonstr-github-1.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://github.com/fahredof">
                <img src={GitHubIcon} alt="GitHub"/>
            </a>
            <p>made by Fahred</p>
        </footer>
    )
};

export default Footer;