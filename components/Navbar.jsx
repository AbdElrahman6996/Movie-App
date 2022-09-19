import React from 'react'
import './Navbar.css'
import logo from '../logo.png'
import HamburgerMenu from '../icons/Hamburger-Menu.svg'
import LanguageIcon from '../icons/Language-Icon.svg'
import ShareIcon from '../icons/Share-Icon.svg'
import ShareWhite from '../icons/share-photo.png'
import FacebookIcon from '../icons/facebook-icon.png'
import TwitterIcon from '../icons/twitter-icon.png'
import CloseIcon from '../icons/Close-icon.svg'
import './Movies.css'

const Navbar = () => {

    let nowDate = new Date()
    
    return (
        <section className='navbar' id='nav'>
            <div className="left-container">
                <div className="nav-links">
                    <ul>
                        <li id='navbars'>
                            <a href="/">Now Playing</a>
                            <a href="/">Popular</a>
                            <a href="/">Top Rated</a>
                            <a href="/">Trending</a>
                            <a href="/">Upcoming</a>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="bottom-container">
                    <div className='icons-down'>
                        <img className='img' src={FacebookIcon} alt="" />
                        <img className='img' src={TwitterIcon} alt="" />
                        <img className='img' src={ShareWhite} alt="" />
                    </div>
                    <div className="copy-claim">
                        <p>Copyright &copy; {nowDate.getFullYear()}All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="logo-container">
                    <img className='img' src={logo} alt="" />
                </div>
                <div className="hamburger-menu">
                    <img className='img' src={HamburgerMenu}  id='menu' onClick={() => {
                        let navbar = document.getElementById('nav')
                        let menu = document.getElementById('menu')
                        let navigation = document.getElementById('navbars')
                        if(navbar.classList.contains("opened")){
                            navbar.style.marginLeft  = "0px"
                            console.log('doness')
                            menu.src = HamburgerMenu
                            navigation.style.marginTop = "300px"
                            return navbar.classList.remove("opened")
                        }
                        navbar.style.marginLeft  = "240px"
                        navigation.style.marginTop = "0px"
                        navbar.classList.add("opened")
                        menu.src = CloseIcon
                    }} alt="" />
                </div>
                <div className="footer-container">
                    <img className='img' src={LanguageIcon} alt="" />
                    <img className='img' src={ShareIcon} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Navbar