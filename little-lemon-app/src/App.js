import './App.css';
import { useState } from "react";

import Header from './components/Header.js';
import Nav from './components/Nav.js'
import Main from './components/Main.js';
import Footer from './components/Footer.js';

function App() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = ()=>{
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header />
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <Main />
      <Footer isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
    </>
  );
}

export default App;
