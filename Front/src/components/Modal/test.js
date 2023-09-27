import React, { useState } from 'react';
import TextInput from '../Input/textInput';
import CheckboxGroup from '../Input/checkbox';
import RadioInput from '../Input/radioInput'; // Importez le composant RadioInput ici

import './modal.css';

function Modal({ isOpen, onClose, title, fields, formData, onInputChange, onSave }) {
  const handleSaveClick = () => {
    onSave(); // Appelle la fonction onSave pour sauvegarder les données
  };

  const handleInputChange = (e) => {
    onInputChange(e); // Appelle la fonction onInputChange pour mettre à jour les données du formulaire
  };

  return (
    <>
      {isOpen && (
        <div className="overlay" onClick={onClose}>
          <div className="modal-container">
            <div className="modal-content">
              <h2>{title}</h2>
              {fields.map((field, index) => (
                <div key={index}>
                  {field.type === "text" ? (
                    <TextInput
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                    />
                  ) : field.type === "checkbox" ? (
                    <CheckboxGroup
                      name={field.name}
                      options={field.options}
                      selectedOptions={formData[field.name] || []}
                      onChange={(updatedOptions) => {
                        // Mettre à jour le formulaire avec les options mises à jour
                        onInputChange({
                          target: {
                            name: field.name,
                            value: updatedOptions,
                          },
                        });
                      }}
                    />
                  ) : field.type === "radio" ? ( // Ajoutez la gestion du type "radio"
                    <RadioInput
                      name={field.name}
                      options={field.options}
                      selectedValue={formData[field.name] || ''}
                      onChange={(updatedValue) => {
                        // Mettre à jour le formulaire avec la valeur mise à jour
                        onInputChange({
                          target: {
                            name: field.name,
                            value: updatedValue,
                          },
                        });
                      }}
                    />
                  ) : null}
                </div>
              ))}
              <button onClick={handleSaveClick}>Enregistrer</button>
              <button onClick={onClose}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
