import React from 'react'

import logo from '../../assets/images/distojoblogo.png';


function Login() {
  return (
    <div className='form__container'>
        <div className='form__content'>
            <div className='form__logo'>
                <img 
                    src={logo}
                    alt="logo distojob"
                    className='form__img'
                />
            </div>
            <h2 className='form__title'>Se connecter</h2>
            <form>
                <input className= "form__input" type="email" placeholder='Email'/>
                <input className= "form__input" type="password" placeholder='Mot de Passe'/>
                <button className='form__btn'>Je me connecte</button>
            </form>
            <p className='form__signin'>Vous n'avez pas de compte ? <a href='#'>Enregistrez-vous ici</a></p>
        </div>
    </div>
  )
}

export default Login;