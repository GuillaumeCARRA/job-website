import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/distojoblogo.png'


import { 
    FaRegBell, 
    FaUserAlt, 
    FaSuitcase, 
    FaIndustry 
} from "react-icons/fa";


import './navProfile.css';

function NavProfile() {
    return (
      <nav className='navprofile'>
        <div className='navprofile__container'>
          <div className='navprofile__logo'>
            <img
              src={logo}
              alt="logo distojob"
              className='navprofile__distojob'
            />
          </div>
          <div className='navprofile__menu'>
            <ul className='navprofile__list'>
              <li className='navprofile__item'>
                <div className='navprofile__icon-container'>
                    <FaIndustry 
                        className='navprofile__icon'
                        size="18px" 
                    />
                </div>
                <a href='/item8' className='navprofile__link'>Entreprises</a>
              </li>
              <li className='navprofile__item'>
                <div className='navprofile__icon-container'>
                    <FaSuitcase 
                        className='navprofile__icon' 
                        size="18px"
                    />
                </div>
                <a href='/item7' className='navprofile__link'>Offres</a>
              </li>
              <li className='navprofile__item'>
                <div className='navprofile__icon-container'>
                    <FaRegBell 
                        className='navprofile__icon' 
                        size="18px"
                    />
                </div>
                <a href='/item6' className='navprofile__link'>Mes Alertes</a>
              </li>
              <li className='navprofile__item'>
                <div className='navprofile__icon-container'>
                    <FaUserAlt 
                        className='navprofile__icon' 
                        size="18px"
                    />
                </div>
                <a href='/item5' className='navprofile__link'>Mon Profil</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavProfile;