import React from 'react';
import { faSearch, faHome, faHeart, faUser, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <FontAwesomeIcon icon={faSearch} />
                <a href="#">Search</a>
            </div>
            <div className="sidebar-menu">
                <FontAwesomeIcon icon={faHome} />
                <a href="#">Home</a>
            </div>
            <div className="sidebar-menu">
                <FontAwesomeIcon icon={faHeart} />
                <a href="#">Favs</a>
            </div>
            <div className="sidebar-menu">
                <FontAwesomeIcon icon={faUser} />
                <a href="#">Profile</a>
            </div>
            <div className="sidebar-menu">
                <FontAwesomeIcon icon={faSlidersH} />
                <a href="#">Setting</a>
            </div>
        </div>
    );
}

export default Sidebar