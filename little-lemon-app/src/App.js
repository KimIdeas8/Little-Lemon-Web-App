import './App.css';

import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';

import {Routes,Route} from 'react-router-dom';
import BookingPage from './components/BookingPage.js';

function App() {
  return (
    <>
    <nav-bar>
      <Header />
      <Nav/>
    </nav-bar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} ></Route>
      <Route path='/booking' element={<BookingPage></BookingPage>}></Route>
    </Routes>
    </>

  );
}

export default App;
