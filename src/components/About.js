import React from 'react'
import ProfileImage from '../assets/img/profile-img.jpg';

function About() {
    return (
        <div>
              <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img src={ProfileImage} class="img-fluid profileimg" alt="profile" />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Software Engineer &amp; Quality Assurance Analyst.</h3>
            <p class="fst-italic">
            Work Experience in Software Development and Quality Assurance.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>09150826789</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Dasmarinas Cavite</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>delacruzrubenjames@gmail.com</span></li>
                </ul>
              </div>
            </div>
            <p>
            Hello, my name is Ruben James Dela Cruz. I am a dedicated and hard working person who believes in honesty and good working relation. 
            I am graduate of Bachelor of Science in Information Technology from STI College Dasmariñas. 
            </p>
          </div>
        </div>

      </div>
    </section>
        </div>
    )
}

export default About
