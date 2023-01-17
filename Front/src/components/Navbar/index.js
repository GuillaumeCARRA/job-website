import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <header className='navbar'>
        <div className='navbar__container'>
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
        </div>
    </header>
  )
}

export default Navbar