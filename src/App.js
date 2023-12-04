import './App.css';
import './css/user/Navbar.css'
import './css/user/Footer.css'
import './css/user/Contact.css'
import './css/user/BookingPage.css'
import './css/user/Price.css'
import './css/user/BlogPage.css'
import './css/user/AboutPage.css'
import './css/user/TeamPage.css'
import './css/user/TestimonialPage.css'
import './css/user/LocationPage.css'
import './css/user/ServicePage.css'
// import './css/other/Other.css'
import './css/other/Animation.css'
import './css/user/Button.css'
import './css/admin/AdminPage.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home';
import BookingPage from './pages/user/BookingPage';
import ContactPage from './pages/user/ContactPage';
import PricePage from './pages/user/PricePage';
import AboutPage from './pages/user/AboutPage';
import BlogPage from './pages/user/BlogPage';
import TestimonialPage from './pages/user/TestimonialPage';
import OurTeamPage from './pages/user/OurTeamPage';
import ButtonComponent from './components/user/ButtonComponent';
import OtherPage from './pages/other/OtherPage';
import ScrollButton from './components/user/ScrollButton';
import AdminHome from './pages/admin/AdminHome';
// import AdminModelApi from './pages/admin/AdminModelApi';
import AdminLogin from './pages/admin/AdminLogin';
import AdminBikeApi from './pages/admin/AdminBikeApi';
import LocationPage from './pages/user/LocationPage';
import TermConditionPage from './pages/user/TermConditionPage';
import PrivacyPolicy from './pages/user/PrivacyPolicy';
import ServicePage from './pages/user/ServicePage';


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
          <Route path='/our-locations' element={<LocationPage />}></Route>
          <Route path='/disclaimer' element={<TermConditionPage />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/our-service' element={<ServicePage />}></Route>






          {/*--------------------- admin -------------------------*/}

          <Route path='/admin' element={<AdminHome />}></Route>
          <Route path='/admin-login' element={<AdminLogin />}></Route>
          <Route path='/admin-bike-api' element={<AdminBikeApi />}></Route>
          {/* <Route path='/admin-model-api' element={<AdminModelApi />}></Route> */}





          <Route path='/other' element={<OtherPage />}></Route>
          
          
          
        </Routes>
        <ScrollButton />

        {/* <ButtonComponent /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
