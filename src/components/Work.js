import React from 'react';
import ss from './images/ss.png'
import rick from './images/rick.png'
import crypto from './images/crypto-site.png'
import admin from './images/admin.png'
import reddit from './images//reddit.png'
import color from './images/color.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Work.css'
import { useEffect } from 'react/cjs/react.development';

function Work() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])

  return (
    <div data-aos='fade-in'>
        <h1 id="work"className='project-header'>PROJECTS</h1>
        <a href='https://github.com/sicklerjordan' target="_blank" id="sub"><p className='project-sub'>GITHUB</p></a>

        <div className='project-container'>
            <div className='card'>
                <div className='div-source'>
                </div>
                <a href="https://condescending-archimedes-85756e.netlify.app" target='_blank'><img src={crypto} alt="" /></a>
            </div>
            <div className='card'>
                <a href='https://sicklerjordan.github.io/Rick-Game/' target="_blank"><img src={rick} alt='' /></a>
             </div>
            <div className='card'>
                <img src={ss} alt='' />
            </div>
            <div className='card'>
                <a href='https://sicklerjordan.github.io/adhoc.project/' target="_blank"><img src={admin} alt='' /></a>
            </div>
            <div className='card'>
                <a href='https://sicklerjordan.github.io/subreddit/' target="_blank"><img src={reddit} alt='' /></a>
            </div>
            <div className='card'>
                <img src={color} alt='' />
            </div>
        </div>
    </div>
    );
}

export default Work;
