import React, { useState } from 'react'; 
import instance from '../../axios';
import { useUser } from '../../context/userContext';
import { useNavigate, Link  } from 'react-router-dom';

import logo from '../../assets/images/distojoblogo.png';

import './signup.css'; 

function SignUp() {
  
  const { updateUserName, updateAuthToken } = useUser();

  const navigate = useNavigate(); 

  const handleSubmit = async(e) => {
    e.preventDefault(); 

    const formData = {
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value,
    };

    try {
        const response = await instance.post('/signup/sign', formData);
        const { data, token } = response.data; 
        
        // Stockage du JWT dans le stockage local
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(formData));
        
        updateAuthToken(token);
        updateUserName(formData.first_name);

        navigate('/profile');
    } catch (error) {
       console.error('Error registering user:', error);
    }
  }

  return (
    <div className='form__container'>
        <div className='form__content'>
            <div className='form__logo'>
              <Link to="/">
                <img 
                    src={logo}
                    alt="logo distojob"
                    className='form__img'
                  />
              </Link>
            </div>
            <h2 className='form__title'>Créer son compte</h2>
            <form onSubmit={handleSubmit}>
                <input className= "form__input" type="text" name="first_name" placeholder='Prénom' required/>
                <input className= "form__input" type="text" name="last_name" placeholder='Nom' required/>
                <input className= "form__input" type="email" name="email" placeholder='Email' required/>
                <input className= "form__input" type="password" name="password" placeholder='Mot de Passe' required/>
                <button className='form__btn'>Je m'inscris</button>
            </form>
            <p className='form__signin'>Vous possédez déjà un compte ? <Link to='/signup/log'>Connectez-vous</Link></p>
        </div>
    </div>
  )
}

export default SignUp;
