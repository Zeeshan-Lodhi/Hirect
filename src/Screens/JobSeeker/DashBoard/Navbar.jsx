import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
    FaRegChartBar,
} from "react-icons/fa";

import { BiLogOutCircle } from "react-icons/bi";

import { MdFavoriteBorder } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import './navbar.css'


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/application",
            name: "Application",
            icon: <FaUserAlt />
        },
        {
            path: "/profile",
            name: "profile",
            icon: <FaRegChartBar />
        },
        {
            path: "/favourite",
            name: "Favourite",
            icon: <MdFavoriteBorder />
        },
        {
            path: "/logout",
            name: "Logout",
            icon: <BiLogOutCircle />
        }
    ]
    return (
        <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
            <div className="top_section">
                <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">QATAR</h1>
                <div
                    style={{ marginLeft: isOpen ? "50px" : "0px" }}
                    className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link">
                        <div className="icon">{item.icon}</div>
                        <div
                            style={{ display: isOpen ? "block" : "none" }}
                            className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Sidebar;