import React from 'react';
import styles from './Header.module.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <input type="checkbox" id="cart" />
            <label htmlFor="cart" className={styles.labelCart}><FontAwesomeIcon icon={faShoppingCart} /></label>
            <h3 className={styles.logo}>오늘 점심 뭐 먹지 ??</h3>
        </>
    );
}

export default Header;