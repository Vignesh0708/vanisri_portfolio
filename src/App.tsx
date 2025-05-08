import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Experience from './sections/Experience';

import Contact from './sections/Contact';
import './styles/globals.css';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />

      <Contact />
    </MainLayout>
  );
}

export default App;