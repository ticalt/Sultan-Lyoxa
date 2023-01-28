import React from 'react'
import "./ProduktCard.css"
import sorti from '../../images/sorti.png'
import butilka from '../../images/butilka.png'
import aos from '../../images/aos.png'
import ariel from '../../images/ariel.png'
import bimax from '../../images/bimax.png'
import yashik from '../../images/yashik.png'
import WhiteBasked from '../../images/white-basked.png'


export const ProduktCard = () => {
  return (
    <div className='produkt-card'>
        <div className="produkt-card-top">
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={sorti} alt="" />
                    <span className="ml"><img className='ml-img'  src={butilka} alt="" />450 мл</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>AOS </b>Ср-во для мытья посуды Апельсин+мята
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={aos} alt="" />
                    <span className="ml"><img className='ml-img' src={butilka} alt="" />450 мл</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>AOS </b>средство для мытья посуды Crystal
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={ariel} alt="" />
                    <span className="ml"><img className='ml-img' src={yashik} alt="" />15X28.8 г</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>ARIEL </b>Автмат Гель СМС жидкое 
                            в растворимых капсулах Liquid Capsules Горный родник
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="unmargin">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={bimax} alt="" />
                    <span className="ml"><img className='ml-img' src={yashik} alt="" />1500 г</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>BIMAX </b>Порошок стиральный Автомат 100 пятен COMPACT   
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="unmargin">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="produkt-card-bottom">
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={sorti} alt="" />
                    <span className="ml"><img className='ml-img' src={butilka} alt="" />450 мл</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>AOS </b>Ср-во для мытья посуды Апельсин+мята
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={aos} alt="" />
                    <span className="ml"><img className='ml-img' src={butilka} alt="" />450 мл</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>AOS </b>средство для мытья посуды Crystal
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={ariel} alt="" />
                    <span className="ml"><img className='ml-img' src={yashik} alt="" />15X28.8 г</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>ARIEL </b>Автмат Гель СМС жидкое 
                            в растворимых капсулах Liquid Capsules Горный родник
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="unmargin">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
            
            <div className="card">
                <div className="card-img-box">
                    <span className="popular">ПОПУЛЯРНОЕ</span>
                    <img className='card-img' src={bimax} alt="" />
                    <span className="ml"><img className='ml-img' src={yashik} alt="" />1500 г</span>
                </div>
                <div className="card-content">
                    <div className="info-card">
                        <span className="info-text">
                            <b>BIMAX </b>Порошок стиральный Автомат 100 пятен COMPACT   
                        </span>
                    </div>
                    <div className="card-main-content">
                        <div className="card-info-text">
                            <span className='muted'>Штрихкод: </span>
                            <span className='value'>4604049097548</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Производитель: </span>
                            <span className='value'>Нэфис</span>
                        </div>
                        <div className="card-info-text">
                            <span className='muted'>Бренд: </span>
                            <span className='value'>AOS</span>
                        </div>
                    </div>
                    <div className="unmargin">
                        <span className='card-price'>48,76 ₸</span>
                        <button className="yellow-btn2">В КОРЗИНУ <img src={WhiteBasked} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
