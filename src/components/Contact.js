import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import './Contact.css'

function Contact() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div className='footer' id="contact" data-aos="fade-in">
        <h1>GET IN TOUCH</h1>
        <p>I am currently looking for new web development opportunities,<br />
             my inbox is always open. Whether you have a question or a project,<br />
              You can expect a fast response! Say Hello</p>
            <a href='mailto:sicklerjordan@gmail.com'><button>Contact Me</button></a>
              <span>Designed and built by Jordan Sickler<br />
                  React JS CSS HTML</span>
    </div>
    );
}

export default Contact;
