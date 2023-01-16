import React, { useState } from 'react';
import styles from './JoinModal.module.css';

const JoinModal = ({toggleJoinModal}) => {
    const handleCloseModal = () => {
        toggleJoinModal();
    }
    return (
        <div className={styles.modal}>
            <div className={styles.overlay}></div>
            <div className={styles.modalContent}>
                <h2>Hello Modal</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, expedita?
                </p>
                <button className={styles.closeModal} onClick={handleCloseModal}>Close</button>
            </div>
        </div>
    );
}

export default JoinModal