import React from 'react'
import plus from "../../images/+.png"
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="container-left">
            <div className="left-box">
                <div className="left-top">
                    <h1 className='hero-h1'>
                    Бытовая химия, 
                    косметика 
                    и хозтовары
                    </h1>

                    <p className='hero-p'>оптом по кокчетаву и области</p>
                    <button className='yellow-btn'>В КАТАЛОГ</button>
                </div>
                <div className="left-bottom">
                    <div className="rec-box">
                        <div className="left-rec">
                            <button className="plus"><img src={plus} alt="" /></button>
                            <div className="hero-text-box">
                                <span className='rec-text '>Только самые</span>
                                <br />
                                <span className='rec-text'>выгодные предложения</span>
                            </div>
                            </div>
                        <div className="right-rec">
                            <button className="plus"><img src={plus} alt="" /></button>
                            <div className="hero-text-box">
                                <span className='rec-text '>Бесплатная доставка <br /> по  </span>
                                <span className='rec-text'>Кокчетаву от 10 тыс ₸</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
