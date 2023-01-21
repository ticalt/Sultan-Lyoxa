import React from 'react'
import sultan from '../../images/sultanfooter.png'
import next from '../../images/next.png'
import download from '../../images/download.png'
import wa from '../../images/wa.png'
import tg from '../../images/tg.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
            <div className="footer-cotent">
                <div className="footer-left-box">
                    <img className='footer-logo' src={sultan} alt="" />
                    <span className="footer-max-span">
                    Компания «Султан» — снабжаем розничные магазины товарами 
                    "под ключ" в Кокчетаве и Акмолинской области    
                    </span>
                    <span className="footer-min-span">Подпишись на скидки и акции</span>
                    <div className="input-box">
                        <input type="text" placeholder='Введите ваш E-mail' className="footer-input" />
                        <button className="footer-input-btn">
                            <img src={next} alt="" />
                        </button>
                    </div>
                </div>
                <div className="footer-main-right-box">
                    <div className="footer-list">
                        <h4 className="footer-bold">Меню сайта:</h4>
                        <span className="footer-def-span">О компании</span>
                        <span className="footer-def-span">Доставка и оплата</span>
                        <span className="footer-def-span">Возврат</span>
                        <span className="footer-def-span">Контакты</span>
                    </div>
                    <div className="footer-list">
                        <h4 className="footer-bold">Категории:</h4>
                        <span className="footer-def-span">Бытовая химия</span>
                        <span className="footer-def-span">Косметика и гигиена</span>
                        <span className="footer-def-span">Товары для дома</span>
                        <span className="footer-def-span">Товары для детей и мам</span>
                        <span className="footer-def-span">Посуда</span>
                    </div>
                    <div className="footer-list">
                        <h4 className="footer-bold">Скачать прайс-лист:</h4>
                        <button className="yellow-btn-download">Прайс-лист <img className='download-btn-img' src={download} alt="" /></button>
                        <span className="footer-def-span">Связь в мессенджерах:</span>
                        <div className="footer-social-icons-box">
                            <img className='footer-social-icon' src={wa} alt="" />
                            <img className='footer-social-icon' src={tg} alt="" />
                        </div>
                    </div>
                    <div className="footer-list">
                        <h4 className="footer-bold">Контакты:</h4>
                        <span className="footer-norm-span">+7 (777) 490-00-91</span>
                        <span className="footer-sup-min-span">время работы: 9:00-20:00</span>
                        <span className="footer-sup-min-span under">Заказать звонок</span>
                        <span className="footer-norm-span">opt.sultan@mail.ru</span>
                        <span className="footer-sup-min-span">На связи в любое время</span>
                        <div className="footer-social-icons-box2">
                            <img className='footer-social-icon2' src={visa} alt="" />
                            <img className='footer-social-icon2' src={mastercard} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
