import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/"} className="nav-link active navbar-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/project"} className="nav-link active navbar-link" aria-current="page">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={"/contact"} className="nav-link active navbar-link" aria-current="page">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;