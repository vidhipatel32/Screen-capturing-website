import React from 'react'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className='container footer__conatiner'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='Footer Logo'/>
                </Link>
                <div className='footer__socials'>
                    <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='about'>About</Link>
                <Link to='conatct'>Contact</Link>
                <Link to='faqs'>FAQs</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact US</Link>
                <Link to='/s'>Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <smalll>2023 VIDHI PATEL &copy; </smalll>
        </div>
    </footer>
  )
}

export default Footer