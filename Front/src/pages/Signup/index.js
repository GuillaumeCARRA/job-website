import React, { useState } from 'react'; 
import instance from '../../axios';
import { useNavigate, Link } from 'react-router-dom';

import logo from '../../assets/images/distojoblogo.png';

import './signup.css'; 

function SignUp() {

  // const navigate = useNavigate(); 

  const handleSubmit = async(e) => {
    e.preventDefault(); 
    console.log('target', e.target[0]);

    const formData = {
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
    };

    console.log('Form Data:', formData);

    try {
       const response = await instance.post('/signup/sign', formData);
       const { data, token } = response.data; 
       
       console.log('User registered:', data);
       console.log('Token:', token);

      //  navigate('/login');
    } catch (error) {
       console.error('Error registering user:', error);
    }
  }

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
            <h2 className='form__title'>Créer son compte</h2>
            <form onSubmit={handleSubmit}>
                <input className= "form__input" type="text" name="first_name" placeholder='Prénom' required/>
                <input className= "form__input" type="text" name="last_name" placeholder='Nom' required/>
                <input className= "form__input" type="email" name="email" placeholder='Email' required/>
                <input className= "form__input" type="password" name="password" placeholder='Mot de Passe' required/>
                <button className='form__btn'>Je m'inscris</button>
            </form>
            <p className='form__signin'>Vous possédez déjà un compte ? <Link to='/login'>Connectez-vous</Link></p>
        </div>
    </div>
  )
}

export default SignUp;