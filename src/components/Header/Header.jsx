import './Header.css'
import phoneItem from '../../images/phoneItem.svg'
import Switcher from '../Switcher/Switcher'
import { useState } from 'react'

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)

  const toggleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
  }

  return (
    <header className="header">
      <div className='header__container'>
        {/* <div className='header__container-items'> */}
          <Switcher/>
          <button className='header__burger-menu' onClick={toggleBurgerMenu}>
            <span className='header__burger-menu-line'></span>
            <span className='header__burger-menu-line'></span>
            <span className='header__burger-menu-line'></span>
          </button>
        {/* </div> */}
        <nav className={`header__nav ${burgerMenu ? 'header__nav-open' : ''}`}>
          <a className='header__nav-item' href="#">Главная</a>
          <a className='header__nav-item' href="#">О нас</a>
          <a className='header__nav-item' href="#">Контакты</a>
          <a className='header__nav-item' href="#">Поиск</a>
          <a className='header__nav-number header__nav-item' href="to:+798788787">
            <img className='header__nav-number-img' src={phoneItem} alt="Значок трубки" />
            <p>+7 (987) 887-87</p>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header;