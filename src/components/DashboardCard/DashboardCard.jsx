import React from 'react';
import './DashboardCard.css';

const DashboardCard = ({id, image, menu, price, summary, deliveryTime}) => {
    return (
        <div className="dashboard-card" key={id}>
            <img src={image} alt="" className="card-image" />
            <div className="card-detail">
                <h4>{menu}<span>{price}</span></h4>
                <p>{summary}</p>
                <p className="card-time"><span className="fas fa-clock"></span> {deliveryTime} mins</p>
                <div className="btn-group">
                    <button className="btn-order">주문하기</button>
                    <button className="btn-together">나눠먹기</button>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard