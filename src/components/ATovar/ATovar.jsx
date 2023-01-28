import React from 'react'
import { ProduktCard } from '../ProduktCard/ProduktCard'
import "./ATovar.css"

export const ATovar = () => {
  return (
    <div className='a-tovar'>
        <div className="container">
            <div className="a-tovar-top-box">
                <div className="a-tovar-text-box">
                    <h2 className="a-tovar-text yellow-text">Акционные</h2>
                    <h2 className="a-tovar-text">товары</h2>
                </div>
            </div>
            <div className="a-tovar-bottom-box">
                <ProduktCard/>
            </div>
        </div>
    </div>
  )
}
