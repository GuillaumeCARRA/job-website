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
    },
    {
      title: "Mes informations",
      description: "Je précise mes informations"
    }, 
    {
      title: "3eme carte",
      description: "Je suis la 3eme carte"
    },
    {
      title: "4eme carte",
      description: "Je suis la 4eme carte"
    }
  ];


  // const [modalOpen, setModalOpen] = useState(Array(cards.length).fill(false));
  // console.log(modalOpen);
  // const [activeCardIndex, setActiveCardIndex] = useState(null);
  // console.log(activeCardIndex);

  // const handleCardOpen = (index) => {
  //   setActiveCardIndex(index);
  //   const newModalOpen = [...modalOpen];
  //   newModalOpen[index] = true;
  //   setModalOpen(newModalOpen);
  // };

  // const handleModalClose = () => {
  //   setActiveCardIndex(null);
  //   const newModalOpen = modalOpen.map(() => false);
  //   setModalOpen(newModalOpen);
  // };

  const [activeCardIndex, setActiveCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveCardIndex(index);
  };

  const handleModalClose = () => {
    setActiveCardIndex(null);
  };



  // const [cardOpen, setCardOpen] = useState(false);
  // const [isEditing, setIsEditing] = useState(false);


  // const handleCardOpen = () => {
  //   if (!isEditing) {
  //     setCardOpen(!cardOpen);
  //   }
  // };

  // const handleInputChange = (e) => {
  //   setIsEditing(!isEditing);
  //   e.stopPropagation(); // Empêche la propagation du clic à la carte
  // };

  // const handleSave = () => {
    
  //   setIsEditing(false);
  

  //   setCardOpen(false);
  // };

  


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

         
          {/* <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div>
          
          <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div>
          
          <div className='jobseeker__card'>
            <div className='jobseeker__icon'>
              <i className='icon'><FcBriefcase size="45px"/></i>
            </div>
            <div className='jobseeker__card__content'>
              <h3 className='jobseeker__card__title'>Mes Critères De Recherche</h3>
              <p className='jobseeker__card_description'>Je précise mes critères de recherche</p>
            </div>
          </div> */}
        </div> 
        {activeCardIndex !== null && (
          <Modal isOpen={true} onClose={handleModalClose} />
        )}
      </div>
    </div>
    
  )
}

export default JobSeekerProfile;