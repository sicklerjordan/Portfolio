import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <div className='container-hero'>
        <div className='hero'>
            <h4>Hello my name is</h4>
            <h2>Jordan Sickler.</h2>
            <h2>FRONT-END WEB DEVELOPER</h2>
             <p>I’m a web developer who focuses on writing clean,<br/>
                elegant, and efficent code. I enjoy creating things that<br/>
                live on the internet. Currently located in Tampa, Florida.</p>
            <a href='mailto:sicklerjordan@gmail.com'><button>Contact Me</button></a>
        </div>
    </div>
    );
}

export default Hero;
