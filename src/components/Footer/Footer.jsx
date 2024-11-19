import './Footer.css'
import Switcher from '../Switcher/Switcher';

const Footer = () => {
  return (
    <footer className="footer">
      <Switcher/>
      <nav className='footer__nav'>
        <a className='footer__nav-item' href="#">О нас</a>
        <a className='footer__nav-item' href="#">Галерея</a>
        <a className='footer__nav-item' href="#">Новости</a>
        <a className='footer__nav-item' href="#">Контакты</a>
      </nav>
      <p className='footer__author'>ООО “Организация” 2020. Все права защищены</p>
    </footer>
  )
}

export default Footer;