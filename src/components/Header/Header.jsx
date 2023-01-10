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
    <div className='header'>
        <div className="container">
          <div className="header-content">
            <div className="header-top">
              <div className="header-left">
                <div className="ht-left-box">
                  <div className="location">
                    <img src={Loc} alt="" />
                    <div className="loc-text">
                      <span className='bold'>
                        г. Кокчетав, ул. Ж. Ташенова 129Б 
                      </span>
                      <span className='mute'>
                        (Рынок Восточный)
                      </span>
                    </div>
                  </div>
                  <div className="email">
                    <img src={Email} alt="" />
                    <div className="loc-text">
                      <span className='bold'>
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
                      <a href="#" className="nav-link">О компании</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Доставка и оплата</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Возврат</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-bottom">
              <div className="header-bot-left">
              <img src={Logo} alt="logo-site" />
              <button className='yellow'>Каталог <img src={Katalog} alt="" /></button>
              <input className='header-input' placeholder='Поиск...' type="text"/>
              <div className="assistant">
                <p className='bold'>+7 (777) 490-00-91</p>
                <span className='mute'>время работы: 9:00-20:00</span>
                <a href='#' className='mute'>Заказать звонок</a>
              </div>
              <img src={Assist} alt="" />
              </div>
              <div className="header-bot-right">
                <div className="dotted">
                  <button className='yellow'>Прайс-лист <img src={download} alt="" /></button>
                </div>
                <img src={magaz} alt="" />
                <p className="mute">Корзина</p>
                <span className='bold'>12 478 ₸</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
