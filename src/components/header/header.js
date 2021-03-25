import React from "react";
import Dana from "../../images/DanaCorona.png";
import "./header.css";

function Header () {
    return(
        <div className="d-flex justify-content-center">
            <img src={Dana} className="headerimg"/>
        </div>
    );
}

export default Header;