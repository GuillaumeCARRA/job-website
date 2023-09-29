import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userName, setUserName] = useState('');
    const [authToken, setAuthToken] = useState('');

    // Charge le nom d'utilisateur et le token JWT depuis le localStorage lors du montage
    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }

        const storedAuthToken = localStorage.getItem('authToken');
        if (storedAuthToken) {
            setAuthToken(storedAuthToken);
        }
    }, []);

    // Mettre à jour le nom d'utilisateur et stocker dans le localStorage
    const updateUserName = (name) => {
        setUserName(name);
        localStorage.setItem('userName', name); // Stocker dans le localStorage
    };

    // Met à jour le token JWT et stock dans le localStorage
    const updateAuthToken = (token) => {
        setAuthToken(token);
        localStorage.setItem('authToken', token); // Stock dans le localStorage
    };

    return (
        <UserContext.Provider value={{ userName, updateUserName, authToken, updateAuthToken }}>
            {children}
        </UserContext.Provider>
    );
};
