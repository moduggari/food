import React from 'react';
import styles from './Dashboard.module.css';
import DashboardCard from '../DashboardCard/DashboardCard';

const Dashboard = () => {
    const recommends = [
        { id : '1', title : 'Best Seller', url : '#' },
        { id : '2', title : 'Near Me', url : '#' },
        { id : '3', title : 'Promotion', url : '#' },
        { id : '4', title : 'Top Rated', url : '#' },
        { id : '5', title : 'All', url : '#' },
        { id : '6', title : 'Favorites', url : '#' },
    ];

    const cards = [
        {
            id : '1',
            image : 'images/image1.jpg',
            menu : '맛있는 고르곤졸라',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~30'
        },
        {
            id : '2',
            image : 'images/image2.jpg',
            menu : '맛있는 고르곤졸라',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~30'
        },
        {
            id : '3',
            image : 'images/image3.jpg',
            menu : '맛있는 고르곤졸라',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~30'
        },
        {
            id : '4',
            image : 'images/image4.jpg',
            menu : '맛있는 고르곤졸라',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~30'
        },
        {
            id : '5',
            image : 'images/image5.jpg',
            menu : '맛있는 고르곤졸라',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~30'
        },
        {
            id : '6',
            image : 'images/image6.jpg',
            menu : '맛있는 고르곤졸라',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~30'
        },
        {
            id : '7',
            image : 'images/image7.jpg',
            menu : '맛있는 고르곤졸라1',
            price : '3,500',
            summary : '둘이 먹다 하나가 죽어도 모를 맛',
            deliveryTime : '15~66'
        }
    ];

    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardBanner}>
                <img src="images/main.jpg" alt="" />
                <div className={styles.bannerPromo}>
                    <h1><span>50% OFF</span><br />Tasty Food<br />On Your Hand</h1>
                </div>
            </div>

            <h3 className={styles.dashboardTitle}>Recommend Food For You</h3>
            <div className={styles.dashboardMenu}>
                {
                    recommends.map((item)=><a href={item.url} key={item.id}>{item.title}</a>)
                }
            </div>

            <div className={styles.dashboardContent}>
                {
                    cards.map((item)=><DashboardCard key={item.id} info={item} />)
                }
            </div>
        </div>
    );
}

export default Dashboard;