import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
    return(
        <header>
            {/* Create the navbar and link the pages to their corresponding buttons on it */}
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            {/* Logo image source: https://pixabay.com/illustrations/mandala-art-design-pattern-1063250/ */}
                            <img src={logo} width="45" height="45" alt="site logo" />
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/packages" className="nav-link">Packages</Link>
                            <Link to="/products" className="nav-link">Products</Link>
                            <Link to="/contact" className="nav-link">Book Appointment</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <h1>Zen Spa</h1>
        </header>
    );
}

export default Header;