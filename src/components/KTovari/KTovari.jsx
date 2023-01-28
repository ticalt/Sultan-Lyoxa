import React from 'react'
import './KTovari.css'
import first from '../../images/1.png'
import second from '../../images/2.png'
import thrird from '../../images/3.png'
import four from '../../images/4.png'
import five from '../../images/5.png'
import uborshik from '../../images/uborshik.png'
import { Carusel } from '../Carusel/Carusel'


export const KTovari = () => {
  return (
    <div className='KTovar'>
        <div className="container">
        <div className="KTovar-top-box">
            <div className="k-tovar-text-box">
                <div className="k-tovar-h2-box">
                    <h2 className="a-tovar-text yellow-text">категории </h2>
                    <h2 className="a-tovar-text">товаров</h2>
                </div>
                <span className="k-tovar-span">10 000+ ходовых позиций по спецмальным ценам</span>
            </div>
            <div className="product-case">
                <div className="product-box">
                    <div className="product-img-box1">
                        {/* <img className='kproduct-img' src={first} alt="" /> */}
                    </div>
                    <span className='product-img-value'>Бытовая химия</span>
                </div>
                <div className="product-box">
                    <div className="product-img-box2">
                        {/* <img className='kproduct-img' src={second} alt="" /> */}
                    </div>
                    <span className='product-img-value'>Косметика и гигиена</span>
                </div>
                <div className="product-box">
                    <div className="product-img-box3">
                        {/* <img className='kproduct-img' src={thrird} alt="" /> */}
                    </div>
                    <span className='product-img-value'>Товары для дома</span>
                </div>
                <div className="product-box">
                    <div className="product-img-box4">
                        {/* <img className='kproduct-img' src={four} alt="" /> */}
                    </div>
                    <span className='product-img-value'>Товары для детей и мам</span>
                </div>
                <div className="product-box">
                    <div className="product-img-box5">
                        {/* <img className='kproduct-img' src={five} alt="" /> */}
                    </div>
                    <span className='product-img-value'>Посуда</span>
                </div>
            </div>
        </div>
        <div className="KTovar-bottom-box">
            <Carusel/>
        </div>
        </div>
    </div>
  )
}
