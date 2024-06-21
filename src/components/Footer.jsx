import './Footer.css'

import footerLogo from '../assets/img/Footers/Light/1440px/Logo.svg';
import facebook from '../assets/img/Footers/Light/1440px/facebook.svg';
import twitter from '../assets/img/Footers/Light/1440px/twitter.svg';
import instagram from '../assets/img/Footers/Light/1440px/instagram.svg';
import behance from '../assets/img/Footers/Light/1440px/behance.svg';
import form from '../assets/img/Footers/Light/1440px/Form.svg';


function Footer () {
    return (
        <footer>
        <hr />
        <div className="container">
          <div className="footer__hug">
            <div className="footer-col">
              <h3>First Column</h3>
              <p>Link 1</p>
              <p>Link 2</p>
              <p>Link 3</p>
              <p>Link 4</p>
              <p>Link 5</p>
            </div>
            <div className="footer-col">
              <h3>Second Column</h3>
              <p>Link 1</p>
              <p>Link 2</p>
              <p>Link 3</p>
              <p>Link 4</p>
              <p>Link 5</p>
            </div>
            <div className="footer-col">
              <h3>Third Column</h3>
              <p>Link 1</p>
              <p>Link 2</p>
              <p>Link 3</p>
              <p>Link 4</p>
              <p>Link 5</p>
            </div>
            <div className="footer-col">
              <h3>Fourth Column</h3>
              <p>Link 1</p>
              <p>Link 2</p>
              <p>Link 3</p>
              <p>Link 4</p>
              <p>Link 5</p>
            </div>
            <img src={form} alt="" />
          </div>
        </div>
        <hr />
        <div className="container">
        <div className="footer__end">
          <img src={footerLogo} alt="" />
          <span className='footer__span'>© 2019 Fabrx </span>
          <div className="social">
            <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
            <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
            <a href="https://x.com/"><img src={twitter} alt="" /></a>
            <a href="https://www.behance.net/"><img src={behance} alt="" /></a>
          </div>
        </div>
        </div>
      </footer>
    )
}

export default Footer