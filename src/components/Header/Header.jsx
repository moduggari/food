import React from 'react';
import './Header.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <input type="checkbox" id="cart" />
            <label htmlFor="cart" className="label-cart"><FontAwesomeIcon icon={faShoppingCart} /></label>
            <h3 className="logo">오늘 점심 뭐 먹지 ??</h3>
        </>
    );
}

export default Header;