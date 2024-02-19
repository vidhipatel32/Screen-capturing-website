import React from 'react'
import './home.css'
import Header from '../../components/Header'
import Tools from '../../components/Tools'
import FAQs from '../../components/FAQs'
import WCS from '../../components/WCS'
import Footer from '../../components/Footer'
function Home() {
  return (
    <>
    <Header/>
    <Tools/>
    <div id='about'>
    <WCS/>
    </div>
    <div id='faqs'>
    <FAQs/>
    </div>
    <div id="contact">
      <Footer/>
    </div>
    
    

    </>
    
  )
}

export default Home