import React, { useState } from 'react';

import './modal.css'; 

function Modal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        // Initialisez ici les informations de saisie
        // Exemple : name: '', email: ''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSave = () => {
        // Traitez les données saisies, par exemple, envoyez-les au backend
        console.log(formData);
        onClose(); // Fermez la modale après avoir sauvegardé
      };
    
    
      return (
        <>
        {isOpen && (
          <div className="overlay" onClick={onClose}>
            <div className="modal-container">
              <div className="modal-content">
                <h2>Modifier les informations</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <button onClick={handleSave}>Enregistrer</button>
                <button onClick={onClose}>Fermer</button>
              </div>
            </div>
          </div>
        )}
      </>
      );
}

export default Modal;