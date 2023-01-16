import React from 'react';
import { faSearch, faHome, faHeart, faUser, faSlidersH, faMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Sidebar.module.css';
import SidebarItem from '../SidebarItem/SidebarItem';

const Sidebar = ({toggleJoinModal}) => {
    const handleJoinModal = () => {
        toggleJoinModal();
    }

    const sidebarItems = [
        {
            id : 1,
            icon: <FontAwesomeIcon icon={faSearch} />,
            iconName: 'Search',
            fn : ''
        },
        {
            id : 2,
            icon: <FontAwesomeIcon icon={faHome} />,
            iconName: 'Home',
            fn : ''
        },
        {
            id : 3,
            icon: <FontAwesomeIcon icon={faHeart} />,
            iconName: 'Favs',
            fn : ''
        },
        {
            id : 4,
            icon: <FontAwesomeIcon icon={faUser} />,
            iconName: 'Profile',
            fn : ''
        },
        {
            id : 5,
            icon: <FontAwesomeIcon icon={faSlidersH} />,
            iconName: 'Setting',
            fn : ''
        },
        {
            id : 6,
            icon: <FontAwesomeIcon icon={faMarker} />,
            iconName: 'Join',
            fn : handleJoinModal
        }
    ];
    return (
        <div className={styles.sidebar}>
            {
                sidebarItems.map((item) => <SidebarItem key={item.id} info={item} /> )
            }
        </div>
    );
}

export default Sidebar