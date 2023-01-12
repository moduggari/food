import React from 'react';
import './OrderDashboard.css';
import { faClock, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OrderDashboard = () => {
    return (
        <div className="dashboard-order">
            <h3>Order Menu</h3>
            <div className="order-address">
                <p>Address Delivery</p>
                <h4>222 B Baker Street, London</h4>
            </div>
            <div className="order-time">
            <FontAwesomeIcon icon={faClock} /> 30 mins <FontAwesomeIcon icon={faMapMarkedAlt} /> 2 Km
            </div>

            <div className="order-wrapper">
                <div className="order-card">
                    <img src="images/image1.jpg" alt="" className="order-image" />
                    <div className="order-detail">
                        <p>Lorem Ipsum sit name</p>
                        <i className="fas fa-times"></i> <input type="text" value="1" />
                    </div>
                    <h4 className="order-price">$35</h4>
                </div>

                <div className="order-card">
                    <img src="images/image2.jpg" alt="" className="order-image" />
                    <div className="order-detail">
                        <p>Lorem Ipsum sit name</p>
                        <i className="fas fa-times"></i> <input type="text" value="1" />
                    </div>
                    <h4 className="order-price">$35</h4>
                </div>

                <div className="order-card">
                    <img src="images/image3.jpg" alt="" className="order-image" />
                    <div class="order-detail">
                        <p>Lorem Ipsum sit name</p>
                        <i className="fas fa-times"></i> <input type="text" value="1" />
                    </div>
                    <h4 className="order-price">$35</h4>
                </div>
            </div>

            <hr className="divider" />

            <div className="order-total">
                <p>Subtotal <span>$152</span></p>
                <p>Tax (10%) <span>$15</span></p>
                <p>Delivery Fee <span>$3</span></p>

                <div className="order-promo">
                    <input type="text" className="input-promo" placeholder="Apply Voucher" />
                    <button className="button-promo">Find Promo</button>
                </div>

                <hr className="divider" />
                <p>Total <span>$174</span></p>
            </div>
            <button className="checkout">Checkout</button>


        </div>
    );
}

export default OrderDashboard