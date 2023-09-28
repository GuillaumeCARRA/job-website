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

export const ModalCard2 = ({ onClose, onSave  }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className="modal-content">
                    <div className='modal-input'>
                        <span className='modal-title'>
                            Ma situation actuelle
                        </span>
                        <span className='modal-title-required'>
                            (Tous les champs sont obligatoires)
                        </span>
                        <div className='modal-form'>
                            <label className='modal-form-title top'>
                                Poste actuel ou dernier poste occupé
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
                                Situation actuelle
                            </label>
                            <div className='contract-container'>
                                <input 
                                    type="radio"
                                    className='modal-checkbox'
                                    name="situation"
                                    id="situation-employed"
                                />
                                <label className='modal-label' htmlFor='situation-employed'>
                                    En poste
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="situation"
                                    id="situation-unemployed"
                                />
                                <label className='modal-label' htmlFor='situation-unemployed'>
                                    Sans emploi
                                </label>
                            </div>
                            
                            <label className='modal-form-title top'>
                                Disponibilité pour un futur job
                            </label>
                            <div className='contract-container'>
                                <input 
                                    type="radio"
                                    className='modal-checkbox'
                                    name="availability"
                                    id="availability-now"
                                />
                                <label className='modal-label' htmlFor='availability-now'>
                                    Immédiate
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="availability"
                                    id="availability-beagreed"
                                />
                                <label className='modal-label' htmlFor='availability-beagreed'>
                                    A convenir
                                </label>
                            </div>
                            
                        
                            <label className='modal-form-title top'>
                                Niveau d'expérience
                            </label>
                            <div className='contract-container'>
                                <input 
                                    type="radio"
                                    className='modal-checkbox'
                                    name="experience"
                                    id="radio-experience"
                                />
                                <label className='modal-label' htmlFor='radio-experience'>
                                    0-1 an
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="experience"
                                    id="radio-experience"
                                />
                                <label className='modal-label' htmlFor='radio-experience'>
                                    2-3 ans
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="experience"
                                    id="radio-experience"
                                />
                                <label className='modal-label' htmlFor='radio-experience'>
                                    4-10 ans
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="experience"
                                    id="radio-experience"
                                />
                                <label className='modal-label' htmlFor='radio-experience'>
                                    11 ans et +
                                </label>
                            </div>

                            <label className='modal-form-title top'>
                                Niveau de qualification le plus haut
                            </label>
                            <div className='contract-container'>
                                <input 
                                    type="radio"
                                    className='modal-checkbox'
                                    name="degree"
                                    id="radio-degree"
                                />
                                <label className='modal-label' htmlFor='radio-degree'>
                                    BEP/CAP
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="degree"
                                    id="radio-degree"
                                />
                                <label className='modal-label' htmlFor='radio-degree'>
                                    BAC
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="degree"
                                    id="radio-degree"
                                />
                                <label className='modal-label' htmlFor='radio-degree'>
                                    BAC +2
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left'
                                    name="degree"
                                    id="radio-degree"
                                />
                                <label className='modal-label' htmlFor='radio-degree'>
                                    BAC +3/4
                                </label>
                                <input 
                                    type="radio"
                                    className='modal-checkbox left '
                                    name="degree"
                                    id="radio-degree"
                                />
                                <label className='modal-label' htmlFor='radio-degree'>
                                    BAC +5
                                </label>
                            </div>

                            <label className='modal-form-title top'>
                                Salaire annuel brut
                            </label>
                            <div className='contract-container'>
                                <div className='modal-form'>
                                    <select className='modal-form-input bg'>
                                        <option value="">Sélectionnez un salaire</option>
                                        <option value="15000">-15000€</option>
                                        <option value="16000">15000€ à 20000€</option>
                                        <option value="20000">20000€ à 25000€</option>
                                        <option value="25000">25000€ à 30000€</option>
                                        <option value="30000">30000€ à 35000€</option>
                                        <option value="35000">35000€ à 40000€</option>
                                        <option value="40000">40000€ à 45000€</option>
                                        <option value="50000">50000€ à 55000€</option>
                                        <option value="60000">60000€ à 65000€</option>
                                        <option value="65000">65000€ à 70000€</option>
                                        <option value="75000">75000€ à 80000€</option>
                                        <option value="85000">85000€ à 90000€</option>
                                        <option value="95000">95000€ à 100000€</option>
                                        <option value="100000">+ de 100000€</option>
                                        <option value="convenir">à convenir</option>
                                    </select>
                                </div>
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

export const ModalCard3 = ({ onClose, onSave  }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className="modal-content">
                    <div className='modal-input'>
                        <span className='modal-title'>
                            J'ajoute mon CV en ligne 
                        </span>
                        <span className='modal-title-required'>
                            (Tous les champs sont obligatoires)
                        </span>
                        <div className='modal-form'>
                            <label className='modal-form-title top'>
                                Mon CV
                            </label>
                            <input 
                                type="file"
                                className='modal-form-input'
                                name="cv"
                                id="cv"
                                accept=".pdf,.doc,.docx"
                                required
                            />
                        </div>
                    </div>
                <button className='modal-btn save' onClick={onSave}>Enregistrer</button>
                <button className="modal-btn close" onClick={onClose}>Fermer</button>
                </div>
            </div>
        </div>
    );
};

export const ModalCard4 = ({ onClose, onSave  }) => {
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