import React from 'react'
import left from '../../images/left.png'
import right from '../../images/right.png'
import './Carusel.css'

export const Carusel = () => {
  return (
    <div className="carousel">
      <div className="carousel-content">
      <div className="page-box2">
            <div className="active-page2"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
          </div>
        <div className="carousel-left-box">
          <span className="carousel-min-span">*Акция действует до 04/09/22</span>
          <span className="carousel-main-bold-text">Название</span>
          <span className="carousel-main-text">Акции</span>
          <span className="carousel-def-span">Условия акции в пару строк, Условия акции <br />
            в пару строк, Условия акции в пару строк</span>
          <button className="carousel-yellow-btn">ПРИНЯТЬ УЧАСТИЕ</button>
          
          {/* <button className="carousel-left-btn"><img src={left} alt="" /></button>
          <button className="carousel-right-btn"><img src={right} alt="" /></button> */}
        </div>
      </div>
    </div>
  )
}
