import React from 'react'
import Logo from '../../images/logo.png'
import Loc from '../../images/loc.png'
import Katalog from '../../images/katalog.png'
import Email from '../../images/pochta.png'
import search from '../../images/search.png'
import Assist from '../../images/g.png'
import download from '../../images/download.png'
import magaz from '../../images/basked.png'
import './Header.css'


export const Header = () => {
  return (
    <header>
        <div className="container">
          <div className="header-content">
            <div className="header-top">
              <div className="header-left">
                <div className="ht-left-box">
                  <div className="location">
                    <img src={Loc} alt="" />
                    <div className="loc-text">
                      <span className='bold block'>
                        г. Кокчетав, ул. Ж. Ташенова 129Б 
                      </span>
                      <span className='mute'>
                        (Рынок Восточный)
                      </span>
                    </div>
                  </div>
                  <div className="opacity"></div>
                  <div className="email">
                    <img src={Email} alt="" />
                    <div className="loc-text">
                      <span className='bold block'>
                        opt.sultan@mail.ru 
                      </span>
                      <span className='mute'>
                        На связи в любое время
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ht-right-box">
                <nav className="navbar">
                  <ul className="nav-list">
                    <li className="nav-item">
                      <a href="#" className="nav-link mute hover-mix">О компании</a>
                    </li>
                    <div className="opacity"></div>
                    <li className="nav-item">
                      <a href="#" className="nav-link mute hover-mix">Доставка и оплата</a>
                    </li>
                    <div className="opacity"></div>
                    <li className="nav-item">
                      <a href="#" className="nav-link mute hover-mix">Возврат</a>
                    </li>
                    <div className="opacity"></div>
                    <li className="nav-item">
                      <a href="#" className="nav-link mute hover-mix">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <hr className='hr'/>
            <div className="header-bottom">
              <div className="header-bot-left">
                <div className="logo-box">
                  <img src={Logo} alt="logo-site" className='logo-site' />
                  <button className='yellow yellow-button hover-btn '><span className='btn-span'>Каталог</span><img src={Katalog} alt="" /></button>
                </div>
                <div className="input-box">
                  <input className='header-input hover-mix' placeholder='Поиск...' type="text"/>
                  <button className='input-btn' type='submit'><img src={search} alt="" /></button>
                </div>
                <div className="assistant">
                  <span className='bold assistant'>+7 (777) 490-00-91</span>
                  <span className='mute assistant'>время работы: 9:00-20:00</span>
                  <a href='#' className='mute assistant hover-mix'>Заказать звонок</a>
                </div>
                <img className='assist-img' src={Assist} alt="" />
                <div className="online"></div>
                <div className="opacity"></div>
              </div>
              <div className="header-bot-right">
                <div className="dotted">
                  <button className='yellow yellow-button price hover-btn'>Прайс-лист <img className='download-img' src={download} alt="" /></button>
                </div>
                <div className="opacity"></div>
                <img className='basked-img hover-mix' src={magaz} alt="" />
                <div className="basked-count hover-mix"><span>3</span></div>              
                <div  className="header-text-box">
                  <span className="mute  header-bottom-text">Корзина</span>
                  <span className='bold'>12 478 ₸</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  )
}
