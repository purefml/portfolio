import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact';

function Ruben() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
      <About />
      <Resume />
      <Skills />
      <Contact />
      </main>
    </div>
  );
}

export default Ruben;
