import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import logo from './logo.png'
const Header = () => {

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="/" ><img src={logo} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mr-5 nav_right " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mr-5">
                            <li className="nav-item mr-4">
                                <NavLink className="nav-link " to='/' aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item ml-4">
                                <NavLink className="nav-link " href='/' >Recruiters</NavLink>
                            </li>
                            <li className="nav-item ml-4">
                                <NavLink className="nav-link " to='/job-seeker'>Job Seeker</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>






        </>
    )
}

export default Header