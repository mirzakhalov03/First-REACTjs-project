import "./Nav.css"
import logo from '../assets/img/logo.svg'
import profileBadge from '../assets/img/profile.svg'
import giftBell from "../assets/img/gift-bell.svg"

function Nav() {
    return(
        <nav>
      <div className='container'>
        <div className="nav__hug">
          <div className="nav__logo"><img src={logo} alt="" /></div>
          <div className="nav__icons">
            <div className="profile"><img src={profileBadge} alt="" /></div>
            <div className="gift-bell"><img src={giftBell} alt="" /></div>
          </div>
        </div>
      </div>
      </nav>
    )
}

export default Nav