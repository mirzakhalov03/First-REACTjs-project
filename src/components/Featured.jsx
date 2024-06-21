import "./Featured.css"
import contentIcon from "../assets/img/contentIcon.svg"
import card1 from '../assets/img/card1.png'
import card2 from '../assets/img/card2.png'
import card3 from '../assets/img/card3.png'
import card4 from '../assets/img/card4.png'
import card5 from '../assets/img/card5.png'
import card6 from '../assets/img/card6.png'
import keyboard from '../assets/img/keyboard.png';

function Featured() {
    return(
        <div className="featured">
        <div className="container">
          <div className="featured__hug">
            <h2>Featured Articles</h2>
            <br />
            <hr />
            <br />
            <br />
            <div className="card__hug">
              <div className="card">
                <img src={card1} alt="" />
                <div className="card__content">
                  <h3>10 beaches you must visit</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
              </div>
              <div className="card">
                <img src={card2} alt="" />
                <div className="card__content">
                  <h3>10 beaches you must visit</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
              </div>
              <div className="card">
                <img src={card3} alt="" />
                <div className="card__content">
                  <h3>10 beaches you must visit</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
              </div>
              <div className="card">
                <img src={card4} alt="" />
                <div className="card__content">
                  <h3>10 beaches you must visit</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
              </div>
              <div className="card">
                <img src={card5} alt="" />
                <div className="card__content">
                  <h3>10 beaches you must visit</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
              </div>
              <div className="card">
                <img src={card6} alt="" />
                <div className="card__content">
                  <h3>10 beaches you must visit</h3>
                  <img src={contentIcon} alt="" />
                  <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
                </div>
              </div>
            </div>
          </div>
          <div className="keyboard">
            <div className="keyboard__hug">
              <div className="keyboard__content">
                <button>Featured</button>
                <h2>Beached to take you somewhere else</h2>
                <img src={contentIcon} alt="" />
              </div>
              <div className="keyboard__img">
                <img src={keyboard} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Featured