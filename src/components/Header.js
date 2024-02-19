import React from 'react'
import {Link} from 'react-scroll'
import Image from '../images/header.png'

function Header() {
  return (
    <header className='main__header'>
        <div className='container main__header-container'>
            <div className='main__header-left'>
                <h1>Screen Capturing tools</h1>
                <p>Screencaps effortlessly captures your screen recordings.Record your screen, webcam, and voice with one click.Quick and easy way to record professional videos </p>
                <Link to='tools' className='btn lg'>Get Started</Link>
            </div>
            <div>
                <div className='main__header-right'>
                    <div className='main__header-circle'></div>
                    <div className='main__header-image'>
                        <img src={Image} alt='Header Image'/>
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header