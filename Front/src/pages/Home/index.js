import React from 'react'; 
import Navbar from '../../components/Navbar';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='home__container'>
            <div className='home__left'>
              <p className='home__description'>
                o,kgo,osr,gos,qohg,soh,oteh,torephtorpeoprtothohor,no, <br/>
                dc,ld,vkldsgvl,go,fdohj,ofpdhj,pojhipjthtijehjeihjijhi <br/>
                lskcjksjcvjdvfjidsgjirsjgdjgsjrhgiojrhgkjhejhszjthjitd <br/>
                o,kgo,osr,gos,qohg,soh,oteh,torephtorpeoprtothohor,no, <br/>
                dc,ld,vkldsgvl,go,fdohj,ofpdhj,pojhipjthtijehjeihjijhi <br/>
                lskcjksjcvjdvfjidsgjirsjgdjgsjrhgiojrhgkjhejhszjthjitd <br/>
                o,kgo,osr,gos,qohg,soh,oteh,torephtorpeoprtothohor,no, <br/>
                dc,ld,vkldsgvl,go,fdohj,ofpdhj,pojhipjthtijehjeihjijhi <br/>
                lskcjksjcvjdvfjidsgjirsjgdjgsjrhgiojrhgkjhejhszjthjitd <br/>
              </p>
              <button className='btn__signin'>S'inscrire</button> 
              <button className='btn__login'>Se connecter</button>
            </div>
            <div className='home__right'>
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                className="home__picture" 
                alt="woman remote work"
              />
            </div>
        </div>
        <div className='home__company'>
              <h2 className='home__titlecompany'>Trouvez la perle rare parmi les entreprises qui recrutent</h2>
        </div>
        <div className='home__remotenumbers'>
            <h2 className='home__titlenumbers'>quelques chiffres du télétravail en france</h2>
        </div>
        <div className='home__latestoffers'>
            <h2 className='home__titlelatestoffers'>les dernières offres</h2>
        </div>
    </div>
  )
}

export default Home;