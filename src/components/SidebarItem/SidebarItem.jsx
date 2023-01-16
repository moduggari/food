import React  from 'react'
import styles from './SidebarItem.module.css';

const SidebarItem = ({info}) => {
    return (
        <div className={styles.sidebarMenu} onClick={info.fn}>
            {info.icon}
            <p>{info.iconName}</p>
        </div>
    );
}

export default SidebarItem