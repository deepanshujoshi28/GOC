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
import './css/Animation.css'
import './css/Button.css'
import './css/AdminPage.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PricePage from './pages/PricePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import TestimonialPage from './pages/TestimonialPage';
import OurTeamPage from './pages/OurTeamPage';
import ButtonComponent from './components/ButtonComponent';
import OtherPage from './pages/OtherPage';
import ScrollButton from './components/ScrollButton';
import AdminHome from './pages/AdminHome';
import AdminModelApi from './pages/AdminModelApi';


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





          {/*--------------------- admin -------------------------*/}

          <Route path='/admin' element={<AdminHome />}></Route>
          <Route path='/admin-model-api' element={<AdminModelApi />}></Route>


          <Route path='/other' element={<OtherPage />}></Route>
        </Routes>
        <ScrollButton />

        {/* <ButtonComponent /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
