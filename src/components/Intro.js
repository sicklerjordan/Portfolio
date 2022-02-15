import React from 'react';
import { useState, useEffect } from 'react';
import './Intro.css'

function Intro() {
 const [intro, setIntro] = useState(true)
    
 useEffect(() => {
    setTimeout(() => {
        setIntro(false)
        console.log(intro)
    }, 3000)
 }, [])

  return (
    <div class={intro ? 'intro-container' : 'hidden'}>
            <div className={intro ? 'intro-text1' : 'active'}>JORDAN SICKLER</div>
    </div>
  );
}

export default Intro;
