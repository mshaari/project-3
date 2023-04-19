import React from 'react';
import '../../styles/header.css';

function Navigation(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <nav className='navigation'>
            <a href="#about" onClick={() => handlePageChange("About") } className={ currentPage === "About" ? "nav-item-active" : "nav-item"}>About Us</a>
            <a href="#login" onClick={() => handlePageChange("Login") } className={ currentPage === "Login" ? "nav-item-active" : "nav-item"}>Login/Signup</a>
            <a href="#dashboard" onClick={() => handlePageChange("Dashboard") } className={ currentPage === "Dashboard" ? "nav-item-active" : "nav-item"}>Dashboard</a>
            <a href="#contact" onClick={() => handlePageChange("Contact") } className={ currentPage === "Contact" ? "nav-item-active" : "nav-item"}>Contact</a>

        </nav>
    );
}

export default Navigation;
