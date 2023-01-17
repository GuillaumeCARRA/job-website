import React from 'react';

function Navbar() {
  return (
    <header className='navbar'>
        <div className='navbar__container'>
            <div className='navbar__menu'>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <a href='/item8'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item7'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item6'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item5'>test1</a>
                    </li>
                    <li className='navbar__item'>
                        <a href='/item4'>test1</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Navbar