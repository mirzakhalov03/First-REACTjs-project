import './FeaturedCol.css'

import cardCol2 from '../assets/img/card-col2.png';
import cardCol3 from '../assets/img/card-col3.png';
import cardCol4 from '../assets/img/card-col4.png'; 
import cardCol5 from '../assets/img/card-col5.png';
import cardCol1 from '../assets/img/card-col1.png';
import contentIcon from '../assets/img/contentIcon.svg';


function FeaturedCol() {
    return(
        <div className="featured-column">
        <div className="container forLoad">
          <div className="featured__hug">
            <h2>Featured Articles</h2>
            <br />
            <hr />
            <br />
            <br />
            <div className="card__hug-col">
              <div className="card-col">
                <img src={cardCol1} alt="" />
                <div className="card__content">
                  <h3 className='card__title'>Pathway to the Mediterranean</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
              </div>
              <div className="card-col">
                <img src={cardCol2} alt="" />
                <div className="card__content">
                  <h3 className='card__title'>My awesome safari in Lahbab Desert, United Arab Emirates</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
              </div>
              <div className="card-col">
                <img src={cardCol3} alt="" />
                <div className="card__content">
                  <h3 className='card__title'>10 amazing things to do in Cuba</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
              </div>
              <div className="card-col">
                <img src={cardCol4} alt="" />
                <div className="card__content">
                  <h3 className='card__title'>The best street food in the world. Ranked!</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
              </div>
              <div className="card-col">
                <img src={cardCol5} alt="" />
                <div className="card__content">
                  <h3 className='card__title'>Travel Packing guide for beginners</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
                </div>
              </div>
            </div>
          </div>
          <button className='loadBtn'>Load More</button>
        </div>
        <div className="container">
          <div className="blue__hug">
            <div className="blue__content">
              <h2>Incredible deals, right to your inbox!</h2>
              <input type="email" className='emailInput' placeholder="Enter your email" />
              <small>By joining you agree to our Terms and Conditions</small>
            </div>
          </div>
        </div>
      </div>
    )
}

export default FeaturedCol