import React from 'react';
import './header.css';
import logo from '../../images/home/banner.jpg';
const Header = () => {
    return (
        <div className="header">
            <div className="header__title">
                <span className="header__small"> Nguyễn Ngọc Quang</span>
                <span className="header__lange"> Blog</span>
            </div>
            <img className="header__img" src={logo} alt="" srcSet="" />
        </div>
    );
}

export default Header;
