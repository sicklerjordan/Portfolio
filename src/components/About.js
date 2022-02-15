import React from 'react';
import { useEffect } from 'react';
import './About.css'
import code from './images/coding-pic.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='about-container' id="about" data-aos='fade-in'>
        <div className='left'>
        <h1>ABOUT ME</h1>
        Hello! My name is Jordan and I enjoy creating things that live on the internet. I have a passion for web development. I like to code things from scratch, and enjoy bringing ideas to life in the browser.<br/><br/>
        I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I'm very good with <span>REACT</span>, <span>JAVASCRIPT</span>, <span>HTML</span>, <span>CSS</span> among other things. I build websites that delight and inform. Creating and maintaining functional, attractive and responsive websites.<br/><br/>
        I'm quietly confident, naturally curious, and perpetually working on improving my chops every single day. Here are a few skills that i have:
        <div className='skills-container'>
        <ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JQuery</li>
        </ul>
        <ul>
          <li>REACT</li>
          <li>SASS</li>
          <li>BootStrap</li>
          <li>Redux</li>
        </ul>
        </div>
        </div>
        <div className='right'>
            <img src={code} alt="" className='about-pic'/>
        </div>
    </div>
  );
}

export default About;
