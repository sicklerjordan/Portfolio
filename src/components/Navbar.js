import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(click === false ? true : false)
    }

  return (
    <div>
        <div className='container'>
            <div className='colone'>
                <p>Jordans <span>Portfolio</span></p>
            </div>
            <div className='coltwo'>
               <a href='#about'><p>About</p></a>
            </div>
            <div className='colthree'>
                <a href='#work'><p>Work</p></a>
            </div>
            <div className='colfour'>
                <a href='#contact'><p>Contact</p></a>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='#about'>About </a>
                </li>
                <li>
                    <a href='#work'>Work </a>
                </li>
                <li>
                    <a href='#contact'>Contact </a>
                </li>
            </ul>
            <div className='colfive' onClick={handleClick}>
                {click === false ? <GiHamburgerMenu /> : <FaTimes />}
            </div>
        </div>
    </div>
    );
}

export default Navbar;
