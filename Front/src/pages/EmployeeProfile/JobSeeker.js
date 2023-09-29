import React, { useState, useEffect } from 'react'
import NavProfile from '../../components/Navbar/navProfile';
import { useUser } from '../../context/userContext';
import { ModalCard1, ModalCard2, ModalCard3, ModalCard4 } from '../../components/Modal/modals';

import './employeeProfile.css';

import { 
  FcBriefcase,
  FcSearch,
  FcAbout,
  FcDocument,
  FcDownload

} from "react-icons/fc"; 

function JobSeeker() {

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [userData, setUserData] = useState({});


    const openModal = (modalComponent, onSaveCallback) => {
        setModalContent(modalComponent);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const onSaveCallback = (updatedData) => {
      setUserData(updatedData);
      closeModal();
    }

    const { userName } = useUser(); 

    return (
        <div className='jobseeker'>
          <NavProfile />
          <div className='jobseeker__container'>
            <div className='jobseeker__data'>
              <div className='jobseeker__infos'>
                  <div className='jobseeker__header'>
                    <div>
                      Bonjour <span className='jobseeker__firstname'> {userName} !</span>
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
                <div className='jobseeker__card' onClick={() => openModal(<ModalCard1 onClose={closeModal} />)}>
                    <div className='jobseeker__icon'>
                    <i className='icon'><FcSearch size="45px"/></i>
                    </div>
                    <div className='jobseeker__card__content'>
                    <h3 className='jobseeker__card__title'>Ma recherche d'emplois</h3>
                    <p className='jobseeker__card_description'>Description de la carte</p>
                    </div>
                </div>
                <div className='jobseeker__card' onClick={() => openModal(<ModalCard2 onClose={closeModal} />)}>
                    <div className='jobseeker__icon'>
                    <i className='icon'><FcBriefcase size="45px"/></i>
                    </div>
                    <div className='jobseeker__card__content'>
                    <h3 className='jobseeker__card__title'>Ma situation</h3>
                    <p className='jobseeker__card_description'>Description de la carte</p>
                    </div>
                </div>
                <div className='jobseeker__card' onClick={() => openModal(<ModalCard3 onClose={closeModal} />)}>
                    <div className='jobseeker__icon'>
                    <i className='icon'><FcDocument size="45px"/></i>
                    </div>
                    <div className='jobseeker__card__content'>
                    <h3 className='jobseeker__card__title'>Mon CV</h3>
                    <p className='jobseeker__card_description'>Description de la carte</p>
                    </div>
                </div>
                <div className='jobseeker__card' onClick={() => openModal(<ModalCard4 onSave={onSaveCallback} onClose={closeModal} />)}>
                    <div className='jobseeker__icon'>
                    <i className='icon'><FcAbout size="45px"/></i>
                    </div>
                    <div className='jobseeker__card__content'>
                    <h3 className='jobseeker__card__title'>Mes informations personnelles</h3>
                    <p className='jobseeker__card_description'>Description de la carte</p>
                    </div>
                </div>
                {showModal && (
                    <div>
                    {/* Modal générique pour afficher le contenu */}
                    {modalContent}
                    </div>
                )}
            </div> 
          </div>
        </div>
        
      )
}

export default JobSeeker;