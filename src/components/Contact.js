import React, { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {

    const [message, setMessage] = useState("");
    const [sender, setSender] = useState("");
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSending(true);
        emailjs.sendForm('service_5iz5qvg', 'template_l4p0qok', e.target, 'user_rS7pUHW6e2Zrkk06N5xhf')
          .then((result) => {
            setSender("");
            setMessage("");
            setIsSending(false);
            alert("Message Sent, We will get back to you shortly", result.text);
          }, (error) => {
            alert("An error occurred, Please try again", error.text);
          });
    }

    const handleOnChange = (e) => {
       setMessage(e.target.value);
    }
    


  return (
    <div>
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <div class="row" data-aos="fade-in">
            <div class="col-lg-6 d-flex align-items-stretch mb-3 mt-3">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

                <iframe
                    title="location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                style={{border:0, width: "100%", height: "290px"}}
                  allowfullscreen
                ></iframe>
              </div>
            </div>


            <div class="col-lg-6 d-flex align-items-stretch mb-3 mt-3">
              <div class="info">

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Message:</h4>
                  <p>Ask me anything! :)</p>
                </div>
                
                <div style={{ marginTop: "30px" }}>
                    <form onSubmit={handleSubmit}>
                    <div class="form-group col-md-6">
                  <label for="name">From:</label>
                  <input type="text" name="from_name" value={sender} onChange={(e) => { setSender(e.target.value) }} class="form-control mb-2" id="from_name" required />
                </div>
                  <textarea class="form-control" value={message} placeholder="Type your message here..." onChange={handleOnChange} name="message" rows="20" required></textarea>
                    <div class="text-center" style={{ marginTop: "30px" }}>
                      {
                        isSending ? <div class="spinner-border" role="status"></div> :  <button class="btn" style={{color: "white", backgroundColor: "#dc3d4b"}} type="submit">Send Message</button>
                      }
                      </div>
                </form>
                </div>
                

              </div>
            </div>

          </div>
          


        </div>
      </section>
    </div>
  );
}

export default Contact;
