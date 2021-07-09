import React from 'react'

function Resume() {
    return (
        <div>
            <section id="resume" class="resume">
      <div class="container">

        <div class="section-title">
          <h2>Resume</h2>
          <div className="mt-4">
          <a style={{backgroundColor: "#212431", color: "white", borderRadius: 5, padding: "10px 10px 10px 10px"}}
                 href={`https://my.indeed.com/p/rubenjamesd-hrddio7/pdf`}
                 rel="noopener noreferrer" target="_blank"
               >Download My resume</a>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Sumary</h3>
            <div class="resume-item pb-0">
              <h4>Ruben James Dela Cruz</h4>
              <p><em>
              Experience in developing Webapps effectively using HTML5 and CSS3. Proficient knowledge of
ReactJS/ReactNative {"&"} ES6Javascript. Well understanding on MVC Web application migration
from server to client (JavaScript,REST). Handson experience with CSS optimization using Bootstrap.
                </em></p>
              <ul>
                <li>Dasmarinas Cavite</li>
                <li>09150826789</li>
                <li>delacruzrubenjames@gmail.com</li>
              </ul>
            </div>

            <div class="resume-item">
              <h4>Quality Assurance Intern</h4>
              <h5>2020 - 2021</h5>
              <p><em>Atlantis Asia - Makati</em></p>
              <ul>
                <li>Intern at Atlantis Asia, Executed tests manually and recorded scripts for Automation Testing on tests that would be executed frequently on Selenium IDE &amp; 
                  WebDriver for functional tests and for Performance Tests.</li>
                <li>Maintained daily communication with team members via status reports and team meetings.</li>
                <li>Participated in reviews/walkthroughs (requirements, design and architectural specifications)</li>
                <li>Performed Regression testing where the Defects have been fixed by developers.</li>
              </ul>
            </div>


          </div>
          
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Professional Experience</h3>
            <div class="resume-item">
              <h4>Software Engineer</h4>
              <h5>2021 - Present</h5>
              <p><em>Xypher Solutions Inc. </em></p>
              <ul>
                <li>Working as a React Developer and participating in coding, testing, debugging new applications and website with the team of designers, developers, and content creators to create digital tools.</li>
                <li>Designing the front-end applications, user interactive (UI) web pages/web apps using web technologies like HTML5, CSS3, Javascript, Bootstrap, React.</li>
                <li>Used Node Package Manager (NPM) to manage the modules and used it to install useful tools such as Express, mongoose, body- parser, bcrypt.js and socket.io.</li>
                <li>Experience with GIT, GITHUB. Postman / Thunder Client, Node JS, Restful APIs.</li>
                <li>Involved in all the stages of Software Development Life Cycle like Application Design, Development, Debugging and Testing all applications.</li>
              </ul>
            </div>
  
          </div>
        </div>

      </div>
    </section>
        </div>
    )
}

export default Resume
