
import './App.css';
import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FaAngleDown } from "react-icons/fa";
import { TbCherryFilled } from "react-icons/tb";
import { CgCardSpades } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Header from './components/Header';
import Slider from './components/Slider';
import Webelieve from './components/Webelieve';
import Letgame from './components/Letgame';
import Mostplayedgame from './components/Mostplayedgame';
import Thebestcasino from './components/Thebestcasino';
import Trendinggame from './components/Trendinggame';
import Morethan from './components/Morethan';
import Footer from './components/Footer';
import Aboutpageyoursecurity from './components/Aboutpageyoursecurity';
import { FaRegUser } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import About from './components/About';
import Blog from './components/Blog';
import Payment from './components/Payment';
import Privacypolicy from './components/Privacypolicy';
import Faqpage from './components/Faqpage';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/faq" element={<Faqpage />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
        </Routes>
        <Footer />

      </div>





    </>
  );
}

export default App;
