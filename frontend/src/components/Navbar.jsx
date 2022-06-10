import React from 'react';
import { Link } from 'react-router-dom';
import Middle from './Middle';
import "./Navbar.css";


const Navbar = () => {
  return (
      <>
    <div className='cont'>
        <div className='wrap'>
            <div className='leftbox'>
                <img className='imgg'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRizAyKUJbQ3xFnyWrLrk4oSxiwLSmnGS05A&usqp=CAU' alt='err'/>
            </div>
            <div className='centrebox'>
                <ul className='centreul'>
                    <Link to="/"><li style={{color:"white"}} className='centreli'>Home</li></Link>
                    <li className='centreli'>About</li>
                    <li className='centreli'>Services</li>
                   <Link to="/products"><li style={{color:"white"}} className='centreli'>Products</li></Link>
                </ul>
            </div>
            <div className='rightbox'>
                <ul className='rightul'>
                    <li className='rightli'>Sign In</li>
                    <li className='rightli'>Register</li>
                    <li className='rightli'>Explore</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar