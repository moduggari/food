import React from 'react';
import styles from './DashboardCard.module.css';
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardCard = ({info}) => {
    return (
        <div className={styles.dashboardCard}>
            <img src={info.image} alt="" className={styles.cardImage} />
            <div className={styles.cardDetail}>
                <h4>{info.menu}<span>{info.price}</span></h4>
                <p>{info.summary}</p>
                <p className={styles.cardTime}><FontAwesomeIcon icon={faClock} /> {info.deliveryTime} mins</p>
                <div className={styles.btnGroup}>
                    <button className={styles.btnOrder}>주문하기</button>
                    <button className={styles.btnTogether}>나눠먹기</button>
                </div>
            </div>
        </div>
    );
}

export default DashboardCard