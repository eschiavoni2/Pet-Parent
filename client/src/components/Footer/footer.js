import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="wrapper">
        <div className="footer">
            <div className="container col-md-1">
                <a className="petfinder" href="https://www.petfinder.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-2x">&#xf1b0;</i>
                </a>
                <a className="adoptapet" href="https://adoptapet.com/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-2x ml-3">&#xf6d3;</i>
                </a>
            </div>
        </div>
        </div>
    );
}

export default Footer;