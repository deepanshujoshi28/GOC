import './App.css';
import './css/Navbar.css'
import './css/Footer.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PricePage from './pages/PricePage';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/book-an-appointment' element={<BookingPage />}></Route>
          <Route path='/contact-us' element={<ContactPage />}></Route>
          <Route path='/our-price' element={<PricePage />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
