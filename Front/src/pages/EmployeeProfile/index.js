import React, { useState } from 'react';
import NavProfile from '../../components/Navbar/navProfile';
import Modal from '../../components/Modal/modal';

import './employeeProfile.css';

import { 
  FcBriefcase 
} from "react-icons/fc"; 



 
function JobSeekerProfile() {

  const cards = [
    {
      title: "Mes Critères De Recherche",
      description: "Je précise mes critères de recherche",
      modalTitle: "Modifier les critères de recherche",
      modalFields: [
        { name: "metier", placeholder: "Métier recherché", type: "text" },
        { name: "localite", placeholder: "Localité", type: "text" },
        { 
          name: "contrat", 
          placeholder: "Contrat souhaité", 
          type: "checkbox",
          options: [
            { label: "CDI", value: "CDI", type: "checkbox" },
            { label: "CDD", value: "CDD", type: "checkbox" },
            { label: "Freelance", value: "Freelance", type: "checkbox" },
            { label: "Alternant", value: "Alternant",type: "checkbox" },
            { label: "Stagiaire", value: "Stagiaire", type: "checkbox" },
          ],
        },
      ]
    },
    {
      title: "Mes informations",
      description: "Je précise mes informations",
      modalTitle: "Modifier les informations",
      modalFields: [
        { name: "email", placeholder: "Email", type: "text" },
        { name: "phone", placeholder: "Téléphone", type: "text" },
        { 
          name: "gender", 
          placeholder: "Genre", 
          type: "radio", 
          options: [
            { label: "test", value: "test", type:"radio" },
            { label: "test 2", value: "test 2", type:"radio" },
          ], 
        },
        { name: "subscribe", placeholder: "Abonné", type: "checkbox", options: [] }
      ]
    }, 
    {
      title: "3eme carte",
      description: "Je suis la 3eme carte",
      modalTitle: "Modifier les données de la 3eme carte",
      modalFields: [
        { name: "field1", placeholder: "Champ 1", type: "text" },
        { name: "field2", placeholder: "Champ 2", type: "text" },
        { name: "field3", placeholder: "Champ 3", type: "text"},

      ]
    },
    {
      title: "4eme carte",
      description: "Je suis la 4eme carte",
      modalTitle: "Modifier les données de la 4eme carte",
      modalFields: [
        { name: "field4", placeholder: "Champ 4", type: "text" },
        { name: "field5", placeholder: "Champ 5", type: "text" },
        { name: "field6", placeholder: "Champ 6", type: "text" }
      ]
    }
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(null);
  console.log(activeCardIndex);

  const [formData, setFormData] = useState({});

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  const handleModalClose = () => {
    setActiveCardIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target || {};
    if (name !== undefined && value !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    // Traitez les données saisies en fonction de la carte sélectionnée (activeCardIndex)
    console.log(formData);
    handleModalClose();
  };

  return (
    <div>
      <NavProfile />
      <div className='jobseeker__container'>
        <div className='jobseeker__data'>
          <div className='jobseeker__infos'>
              <div className='jobseeker__header'>
                <div>
                  Bonjour <span className='jobseeker__firstname'>Guillaume !</span>
                </div>
              </div>
              <div className='jobseeker__global'>
                <div className='jobseeker__global__visible'>
                  <span>CV visibile auprès des recruteurs</span>
                  <input type="checkbox" className='input__switch' id="visible" name="visible"/>
                  <label htmlFor="visible">
                    <span className='input__switch__button'>

                    </span>
                  </label>
                </div>
                <div className="jobseeker__global__cv"> 
                  <div className='jobseeker__global__cv__seen'>
                    <span>CV vu par</span>
                    <div className="jobseeker__global__cv__seen__number">200</div>
                    <span>recruteurs</span>
                  </div>
                  <div className="jobseeker__global__cv__fields">
                    <div className='jobseeker__global__cv__fields__items'>
                      Poste actuel : <span>test</span>
                    </div> 
                    <div className='jobseeker__global__cv__fields__items'>
                      Lieu de résidence : <span>Choisy-le-roi</span>
                    </div> 
                    <div className='jobseeker__global__cv__fields__items'>
                      Statut : <span>test</span>
                    </div> 
                  </div>
                </div>
              </div>
              <div className='jobseeker__logout-container'>
                <button className='jobseeker__logout'>Se déconnecter</button>
              </div>
          </div>
        </div>
        <div className='jobseeker__cards'>
        {cards.map((card, index) => (
          <div className='jobseeker__card' key={index} onClick={() => handleCardClick(index)}>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>{card.title}</h3>
              <p className='jobseeker__card_description'>{card.description}</p>
            </div>
   
            </div>
        ))}
        </div> 
        {activeCardIndex !== null && (
          <Modal
            isOpen={true}
            onClose={handleModalClose}
            title={cards[activeCardIndex].modalTitle}
            fields={cards[activeCardIndex].modalFields}
            formData={formData}
            onInputChange={handleInputChange}
            onSave={handleSave}
          />
        )}
      </div>
    </div>
    
  )
}

export default JobSeekerProfile;