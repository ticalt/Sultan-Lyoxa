import { cloneElement, useEffect, useState } from 'react'
import './CaruselAssist.css'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const PAGE_WIDTH = 450

export default CaruselAssist = ({children}) => {
    const [pages, setPages] = useState([])
    const [offset, setOffset] = useState(0)

    const handleLeftArrowClick = ()=> {
        console.log('left');
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH

            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = ()=> {
        console.log('right');
        setOffset((currentOffset)=> {
            const newOffset = currentOffset = PAGE_WIDTH

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(()=> {
        setPages(
            children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        maxWidth: `${PAGE_WIDTH}px`,
                        minWidth: '100%',
                    }
                })
            })
        )
    }, [])


    return(
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick}/>
            <div className="window">
                <div className="all-pages-container"
                style={{
                    transform: `translateX(${offset}px)`
                }}
                >{pages}</div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick}/>
        </div>
    )
}