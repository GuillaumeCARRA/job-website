import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import instance from '../../axios';
import { useUser } from '../../context/userContext';

import logo from '../../assets/images/distojoblogo.png';



function Login() {

  const navigate = useNavigate();  
  const { updateUserName, updateAuthToken } = useUser();


  const handleSignIn = async(e) => {
    e.preventDefault(); 


    const formData = {
        email: e.target[0].value,
        password: e.target[1].value,
    }
    
   try {

    const response = await instance.post('/signup/log', formData);
    const { user, token } = response.data; 

    console.log('User connected:', user);
    console.log('Token:', token);


    // localStorage.setItem('currentUserId', user.id);

    // Stock les données de l'utilisateur dans le localStorage
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('authToken', token);
    
    updateAuthToken(token);
    updateUserName(user.first_name);

    navigate('/profile'); 

    } catch (error) {
        console.error('Error connecting user:', error); 
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
            <h2 className='form__title'>Se connecter</h2>
            <form onSubmit={handleSignIn}>
                <input className= "form__input" type="email" name="email" placeholder='Email' required/>
                <input className= "form__input" type="password" name="password" placeholder='Mot de Passe' required/>
                <button className='form__btn'>Je me connecte</button>
            </form>
            <p className='form__signin'>Vous n'avez pas de compte ? <Link to='/signup/sign'>Enregistrez-vous ici</Link></p>
        </div>
    </div>
  )
}

export default Login;