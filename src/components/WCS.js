// WHY CHOOSE SCREENCAPS

import React, { useState } from 'react'
import SectionHead from './SectionHead'
import { ImQuotesLeft } from 'react-icons/im'
import Card from '../UI/Card'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { wcs } from '../Data'

const WCS = () => {
  const [index, setIndex] = useState(0)
  const { icon, name, desc } = wcs[index];
  const prevWcsHandler = () => {
    setIndex(prev => prev - 1);
    if (index <= 0) {
      setIndex(wcs.length - 1);
    }

  }
  const nextWcsHandler = () => {
    setIndex(prev => prev + 1);
    if(index>= wcs.length-1){
      setIndex(0);
    }
    
  }

  return (
    <section className='wcs'>
      <div className="container wcs__container">
        <SectionHead icon={<ImQuotesLeft />} title='Why Choose ScreenCaps' className='wcs__head' />
        <Card className='wcs'>
          <div className='wcs__avatar'>
            <span> {icon}</span>
          </div>
          <h3>{name}</h3>
          <p className='wcs__desc'>{desc}</p>
        </Card>
        <div className='wcs__btn-container'>
          <button className='wcs__btn' onClick={prevWcsHandler}><IoIosArrowDropleftCircle /></button>
          <button className='wcs__btn' onClick={nextWcsHandler}><IoIosArrowDroprightCircle /></button>
        </div>
      </div>
    </section>
  )
}

export default WCS;