import React, { useEffect, useState } from 'react'
import profileImage from '../assets/img/profile-avatar.png';
const axios = require('axios');


export default function Header() {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    getSocials()
  }, []);

  const getSocials = async () => {
    axios.get('https://mocki.io/v1/8c764ec3-2c6c-4afe-bdb2-265bf2d89397')
    .then((response) => {
      const incomingData = response.data;
      setSocials(incomingData)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

    return (
        <div>
  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={profileImage} alt="avatar" style={{width: "175px", height: "150px"}} className="img-fluid"/>
        <h1 className="text-light"><a href="index.html">Ruben James</a></h1>
        <div className="social-links mt-3 text-center">
          {
            (socials) && socials.map((item) => {
             return (
               <a
                 href={`https://${item.socialMediaName}.com/` + item.handle}
                 rel="noopener noreferrer" target="_blank"
               >
                 <i className={`bx bxl-${item.socialMediaName}`}></i>
               </a>
             );
            })
          }
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
        </div>
    )
}
