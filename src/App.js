import './App.css';
import './css/Navbar.css'
import './css/Footer.css'
import './css/Contact.css'
import './css/BookingPage.css'
import './css/Price.css'
import './css/BlogPage.css'
import './css/AboutPage.css'
import './css/TeamPage.css'
import './css/TestimonialPage.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PricePage from './pages/PricePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import TestimonialPage from './pages/TestimonialPage';
import OurTeamPage from './pages/OurTeamPage';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/book-an-appointment' element={<BookingPage />}></Route>
          <Route path='/contact-us' element={<ContactPage />}></Route>
          <Route path='/our-price' element={<PricePage />}></Route>
          <Route path='/about-us' element={<AboutPage />}></Route>
          <Route path='/our-team' element={<OurTeamPage />}></Route>
          <Route path='/customer-reviews' element={<TestimonialPage />}></Route>
          <Route path='/blog-and-articles' element={<BlogPage />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
