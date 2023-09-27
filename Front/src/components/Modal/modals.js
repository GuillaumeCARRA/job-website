import React from 'react';

import './modal.css';

export const ModalCard1 = ({ onClose, onSave }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className="modal-content">
                    <div className='modal-input'>
                        <span className='modal-title'>
                            Je précise mes critères de recherche
                        </span>
                        <span className='modal-title-required'>
                            (Tous les champs sont obligatoires)
                        </span>
                        <div className='modal-form'>
                            <label className='modal-form-title top'>
                                Métier(s) recherché(s)
                            <span>
                                (3 choix maximum)
                            </span>
                            </label>
                            <input 
                                type="text"
                                className='modal-form-input'
                                name="job"
                                id="job"
                                placeholder="Développeur Web, Chef de projet, Secrétaire, etc..."
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label className='modal-form-title top'>
                                Localité(s) recherchée(s)
                            <span>
                                (3 choix maximum)
                            </span>
                            </label>
                            <input 
                                type="text"
                                className='modal-form-input'
                                name="job"
                                id="job"
                                placeholder="Ville, Département, région"
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label className='modal-form-title top'>
                                Types(s) de contrat
                            </label>
                           <div className='contract-container'>
                                <input className='modal-checkbox' type="checkbox" name="cdi" id="cdi"/>
                                <label className="modal-label">CDI</label>
                                
                                <input className='modal-checkbox' type="checkbox" name="cdd" id="cdd"/>
                                <label className="modal-label">CDD</label>
                                
                                <input className='modal-checkbox' type="checkbox" name="stage" id="stage"/>
                                <label className="modal-label">Stage</label>

                                <input className='modal-checkbox' type="checkbox" name="alternance" id="alternance"/>
                                <label className="modal-label">Alternance</label>

                                <input className='modal-checkbox' type="checkbox" name="freelance" id="freelance"/>
                                <label className="modal-label">Freelance</label>
                           </div>
                        </div>
                    </div>
                <button className='modal-btn save' onClick={onSave}>Enregistrer</button>
                <button className="modal-btn close" onClick={onClose}>Fermer</button>
                </div>
            </div>
        </div>
    );
};

export const ModalCard2 = ({ onClose }) => {
    return (
        <div>
            
        </div>
    );
};

export const ModalCard3 = ({ onClose }) => {
    return (
        <div>
            
        </div>
    );
};

export const ModalCard4 = ({ onClose }) => {
    return (
        <div>
            
        </div>
    );
};