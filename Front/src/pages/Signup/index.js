import React from 'react'

import logo from '../../assets/images/distojoblogo.png';

import './signup.css'; 

function SignUp() {
  return (
    <div className='signup__container'>
        <div className='signup__content'>
            <div className='signup__logo'>
                <img 
                    src={logo}
                    alt="logo distojob"
                    className='signup__img'
                />
            </div>
            <h2 className='signup__title'>Créer son compte</h2>
            <form>
                <input className= "form__input" type="text"  placeholder='Prénom'/>
                <input className= "form__input" type="text"  placeholder='Nom'/>
                <input className= "form__input" type="email" placeholder='Email'/>
                <input className= "form__input" type="password" placeholder='Mot de Passe'/>
                <button className='form__btn'>Je m'inscris</button>
            </form>
            <p className='form__signin'>Vous possédez déjà un compte ? <a href='#'>Connectez-vous</a></p>
        </div>
    </div>
  )
}

export default SignUp