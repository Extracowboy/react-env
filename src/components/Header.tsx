import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    const activeStyle = {
        fontWeight: 700
    };

    return (
        <div className="header-bg">
            <div className="header">
                <ul>
                    <li><NavLink activeStyle={activeStyle} to="/" exact>Home</NavLink></li>
                    <li><NavLink activeStyle={activeStyle} to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
