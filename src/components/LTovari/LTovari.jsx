import React from 'react'
import './LTovari.css'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'
import brand6 from '../../images/brand6.png'
import brand7 from '../../images/brand7.png'
import brand8 from '../../images/brand8.png'
import brand9 from '../../images/brand9.png'
import brand10 from '../../images/brand10.png'
import location from '../../images/location.png'
import loc from '../../images/loc.png'
import file from '../../images/file.png'

export const LTovari = () => {
  return (
    <div className='LTovari'>
        <div className="container">
            <div className="ltovari-top-box">
                <div className="ltovari-text-box">
                    <div className="ltovari-h2-box">
                        <h2 className="yellow-text ltovari-h2">Лучшие</h2>
                        <h2 className="a-tovar-text">товары</h2>
                    </div>
                    <span className="ltovari-span">От ведущих мировых брендов</span>
                </div>
                <div className="ltovari-brand-box">
                    <div className="brand">
                        <img src={brand1} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand2} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand3} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand4} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand5} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand6} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand7} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand8} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand9} alt="" className="brand-img"/>
                    </div>
                    <div className="brand">
                        <img src={brand10} alt="" className="brand-img"/>
                    </div>
                </div>
                <div className="page-box">
                    <div className="active-page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                </div>
            </div>
            <div className="ltovar-bottom-box">
                <div className="ltovar-bottom-bcg">
                    <div className="ltovar-bottom-content">
                        <div className="blur-top-text-box">
                            <h2 className="blur-h2">Контакты</h2>
                            <span className="blur-span">Оптовый поставщик «Султан»</span>
                        </div>
                        <div className="blur-bottom-box">
                            <div className="blur-bottom-left">
                                <div className="blur-bottom-top">
                                    <h3 className='blur-h3q'>Адрес:</h3>
                                    <div className="blur-bot-span-box">
                                        <img className='blur-top-img' src={loc} alt="" />
                                        <div className="blur-span-box2">

                                        <span className="blur-span2">г. Кокчетав, ул. Ж. Ташенова 129Б<br /> (Рынок Восточный)</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className='blur-hr'/>
                                <div className="blur-botto-bottom">
                                <h3 className='blur-h3q'>Данные налогоплательщика:</h3>
                                    <div className="blur-bot-span-box">
                                        <img  className='blur-top-img' src={file} alt="" />
                                        <div className="blur-span-box2">
                                        <span className="blur-span2">ИП Катран Д.С.
                                        </span>
                                        <br />
                                        <span className="blur-span2">ИИН: 860113450858
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blur-bottom-right">
                            <h3 className='blur-h3q'>Отдел продаж:</h3>
                                    <div className="blur-bot-span-box">
                                        <div className="blur-span-box2">
                                            <span className="blur-span2">+7 (777) 490-00-91</span>
                                            <br />
                                            <span className="blur-span2">opt.sultan@mail.ru</span>
                                        </div>
                                    </div>
                                <hr className='blur-hr'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
