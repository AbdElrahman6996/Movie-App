import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <footer className='contact-us'>
            <h2>Contac Us</h2>
            <div className="inputs">
                <div className="container">
                    <input type="text" placeholder='Enter your name' />
                    <input type="text" placeholder='Enter Email' />
                </div>
                <div className="container">
                    <input type="text" placeholder='Enter Phone' />
                    <input type="text" placeholder='Enter Age' />
                </div>
                <div className="container">
                    <input type="text" placeholder='Enter Password' />
                    <input type="text" placeholder='Re Enter Password' />
                </div>
            </div>
            <a href="/">Submit</a>
        </footer>
    )
}

export default Contact