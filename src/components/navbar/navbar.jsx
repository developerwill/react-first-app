import React from 'react';
import navbarLinks from './navbarLinks';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const links = navbarLinks.map((data, index) => {
        return (
            <li className="nav-item" key={index}>
                <Link className='nav-link' to={data.href}>
                    {data.text}
                </Link>
            </li>
        );
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className='nav-link' to="/">
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;