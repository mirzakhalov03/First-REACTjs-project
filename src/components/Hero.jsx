import "./Hero.css"
import contentIcon from "../assets/img/contentIcon.svg"



function Hero() {
    return(
        <div className="hero">
        <div className="container">
        <div className="hero__hug">
        <div className="hero__content">
          <h1>5 mind blowing facts about the iPhone 14</h1>
          <br />
          <img src={contentIcon} alt="" />
        </div>
        </div>
        </div>
      </div>
    )
}

export default Hero