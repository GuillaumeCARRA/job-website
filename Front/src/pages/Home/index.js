import React from 'react'; 
import Navbar from '../../components/Navbar';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='home__container'>
            <div className='home__left'>
              <p>
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
            </div>
            <div className='home__right'>
              <img 
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                className="home__picture" 
                alt="woman remote work"
              />
            </div>
        </div>
    </div>
  )
}

export default Home;