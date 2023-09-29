import React, { useState, useEffect } from 'react';
import instance from '../../axios';

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
                            <label className='modal-form-title top-radio'>
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
                            
                            <label className='modal-form-title top-radio'>
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
                            
                        
                            <label className='modal-form-title top-radio'>
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

                            <label className='modal-form-title top-radio'>
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

                            <label className='modal-form-title top-radio'>
                                Salaire annuel brut
                            </label>
                            <div className='contract-container'>
                                <div className='modal-form'>
                                    <select className='modal-form-input bg'>
                                        <option className='salary' value="">Sélectionnez un salaire</option>
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

    const [cvFile, setCvFile] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0]; // Obtient le fichier sélectionné
      setCvFile(file);
    };

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
                                onChange={handleFileChange}
                                required
                            />
                            {cvFile && (
                                <a
                                    href={URL.createObjectURL(cvFile)}
                                    download="mon_cv.pdf" 
                                    className="download-link"
                                >
                                    Télécharger le CV
                                </a>
                            )}
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

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: ''  
    });

    useEffect(() => {
        // Vérifie si les données d'inscription sont disponibles dans le localStorage
        const storedData = localStorage.getItem('userData');
        if (storedData) {
          const userData = JSON.parse(storedData);
          // Met à jour l'état local avec les données d'inscription
          setFormData(userData);
        }
    }, []);
    
    const handleSave = () => {
        // Récupére les données actuelles de l'utilisateur dans le localStorage
        const storedData = localStorage.getItem('userData');
        const userData = storedData ? JSON.parse(storedData) : {}; // Si les données existent, parsez-les, sinon initialisez un objet vide

        // Met à jour uniquement les champs qui sont modifiés
        const updatedData = {
            ...userData,
            password: formData.password,
            tel: formData.tel,
            city: formData.city,
            country: formData.country,
        };
    
        // Met également à jour les données d'utilisateur dans le localStorage
        localStorage.setItem('userData', JSON.stringify(updatedData));
    
        // Appelle la fonction onSave avec les données mises à jour
        onSave(updatedData);
    
        onClose();
    };

    return (
        <div className='modal-overlay'>
            <div className='modal-container'>
                <div className="modal-content">
                    <div className='modal-input'>
                        <span className='modal-title'>
                            Je renseigne mes informations 
                        </span>
                        <span className='modal-title-required'>
                            (Tous les champs sont obligatoires)
                        </span>
                        <div className='modal-form'>
                            <label for='last_name' className='modal-form-title top'>
                                Nom
                            </label>
                            <input 
                                type="text"
                                className='modal-form-input'
                                name="last_name"
                                id="last_name"
                                placeholder="Entrez votre nom"
                                value={formData.last_name}
                                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label for='first_name' className='modal-form-title top'>
                                Prénom
                            </label>
                            <input 
                                type="text"
                                className='modal-form-input'
                                name="first_name"
                                id="first_name"
                                placeholder="Entrez votre prénom"
                                value={formData.first_name}
                                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label for='email' className='modal-form-title top'>
                               Email
                            </label>
                            <input 
                                type="email"
                                className='modal-form-input'
                                name="email"
                                id="email"
                                placeholder="Entrez votre email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label for="password" className='modal-form-title top'>
                                Mot de passe
                            </label>
                            <input 
                                type="password"
                                className='modal-form-input'
                                name="password"
                                id="password"
                                placeholder="Entrez votre mot de passe"
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label for="tel" className='modal-form-title top'>
                                Téléphone
                            </label>
                            <input 
                                type="tel"
                                className='modal-form-input'
                                name="tel"
                                id="tel"
                                placeholder="Entrez votre numéro de téléphone"
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label for="city" className='modal-form-title top'>
                                Ville de résidence
                            </label>
                            <input 
                                type="text"
                                className='modal-form-input'
                                name="city"
                                id="city"
                                placeholder="Entrez votre ville de résidence"
                                required
                            />
                        </div>
                        <div className='modal-form'>
                            <label for="country" className='modal-form-title top'>
                                Pays de résidence
                            </label>
                            <input 
                                type="text"
                                className='modal-form-input'
                                name="country"
                                id="country"
                                placeholder="Entrez votre pays de résidence"
                                required
                            />
                        </div>
                    </div>
                <button className='modal-btn save' onClick={handleSave}>Enregistrer</button>
                <button className="modal-btn close" onClick={onClose}>Fermer</button>
                </div>
            </div>
        </div>
    );
};