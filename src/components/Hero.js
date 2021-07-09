import React from 'react'
import Typed from 'typed.js';

function Hero() {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "I am Addicted to coffee.",
        "2d animation hobbyist",
        "And a Software Developer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
          <div className="hero-container" data-aos="fade-in">
              <h1>Ruben James</h1>
          <p>
            <span className="typed" ref={el} />
          </p>
          </div>
          
      </section>
    </div>
  );
}

export default Hero
