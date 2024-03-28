import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode ]= useState(false);

  return (
    <div className={darkMode && "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className='bg-white dark:bg-gray-900'>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main> 

    </div>
  );
}

export default App;