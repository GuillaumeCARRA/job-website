import React from 'react';

import logo from '../../assets/images/distojoblogo.png'


import './navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__logo'>
                <img 
                    src={logo} 
                    alt="logo distojob" 
                    className='navbar__distojob'
                />
            </div>
            <div className='navbar__menu'>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a href='/item8' className='navbar__link'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item7' className='navbar__link'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item6' className='navbar__link'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item5' className='navbar__link'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item4' className='navbar__link'>test1</a>
                    </li>
                </ul>
            </div>
            <div className="navbar__buttons">
                    <button className='navbar__btn navbar__btn--login'>Se connecter</button>
                    <button className='navbar__btn navbar__btn--signup'>S'inscrire</button>
            </div>
        </div>
    </header>
  )
}

export default Navbar