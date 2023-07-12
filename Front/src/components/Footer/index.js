import React from 'react';

import './footer.css';


function Footer() {
  return (
    <footer className='footer'>
        <div className='footerLeftContainer'>
            <div className="footerMenu">
               
                <h1 className="footerMenuTitle">
                    A propos de nous
                </h1>
                <ul className="footerMenuList">
                    <li className="footerMenuListItem">
                        Qui sommes nous ? 
                    </li>
                    <li className="footerMenuListItem">
                        Contactez Nous
                    </li>
                    <li className="footerMenuListItem">
                        On recrute
                    </li>
                </ul>
            </div>
        
            <div className="footerMenu">
                
                <h1 className="footerMenuTitle">
                    Liens Utiles
                </h1>
                <ul className="footerMenuList">
                    <li className="footerMenuListItem">
                        Les offres par catégorie
                    </li>
                    <li className="footerMenuListItem">
                        Les offres par ville
                    </li>
                    <li className="footerMenuListItem">
                        Les offres par entreprise
                    </li>
                    <li className="footerMenuListItem">
                        FAQ
                    </li>
                </ul>
            </div>
          
            <div className="footerMenu">
          
                <h1 className="footerMenuTitle">
                    Informations Légales
                </h1>
                <ul className="footerMenuList">
                    <li className="footerMenuListItem">
                        Politique de confidentialité
                    </li>
                    <li className="footerMenuListItem">
                        Gérer mes cookies
                    </li>
                    <li className="footerMenuListItem">
                        CGU
                    </li>
                </ul>
            </div>
        </div>

             <div className="footerRightContainer">
            <div className="footerRightMenu">
                <h1 className="footerMenuTitle">
                    S'abonner à notre newsletter
                </h1>
                <div className="footerMail">
                    <input type="email" placeholder="your@email.com" className="footerInput" />
                    <button className="footerButton">Join!</button>
                </div>
            </div>
            <div className="footerRightMenu">
                <h1 className="footerMenuTitle">
                    N'hésitez pas à nous suivre sur les réseaux
                </h1>
                <div className="footerIcons">
                    {/* <img src="./img/facebook.png" alt="fb logo" class="footerIcon">
                    <img src="./img/twitter.png" alt="twiter logo" class="footerIcon">
                    <img src="./img/instagram.png" alt="insta logo" class="footerIcon">
                    <img src="./img/whatsapp.png" alt="whatsapp logo" class="footerIcon"> */}
                </div>
            </div>
            <div className="footerRightMenu">
                <span className="copyright">
                    © 2023 DistoJob.
                </span>
            </div>
        </div>
    
    </footer>
  )
}

export default Footer;