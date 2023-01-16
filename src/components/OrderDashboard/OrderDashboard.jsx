import React from 'react';
import styles from './OrderDashboard.module.css';
import { faClock, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderDashboard = () => {
    return (
        <div className={styles.dashboardOrder}>
            <h3>Order Menu</h3>
            <div className={styles.orderAddress}>
                <p>Address Delivery</p>
                <h4>222 B Baker Street, London</h4>
            </div>
            <div className={styles.orderTime}>
            <FontAwesomeIcon icon={faClock} /> 30 mins <FontAwesomeIcon icon={faMapMarkedAlt} /> 2 Km
            </div>

            <div className={styles.orderWrapper}>
                <div className={styles.orderCard}>
                    <img src="images/image1.jpg" alt="" className={styles.orderImage} />
                    <div className={styles.orderDetail}>
                        <p>Lorem Ipsum sit name</p>
                        <FontAwesomeIcon icon={faClock} /> <input type="text" value="1" />
                    </div>
                    <h4 className={styles.orderPrice}>$35</h4>
                </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.orderTotal}>
                <p>Subtotal <span>$152</span></p>
                <p>Tax (10%) <span>$15</span></p>
                <p>Delivery Fee <span>$3</span></p>

                <div className={styles.orderPromo}>
                    <input type="text" className={styles.inputPromo} placeholder="Apply Voucher" />
                    <button className={styles.buttonPromo}>Find Promo</button>
                </div>

                <hr className={styles.divider} />
                <p>Total <span>$174</span></p>
            </div>
            <button className={styles.checkout}>Checkout</button>


        </div>
    );
}

export default OrderDashboard