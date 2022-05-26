import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider'
import style from "./Navbar.module.css"

const Footer = ({text}) => {


    const [theme] =useContext(ThemeContext);
  return (
    <div className={`${style.footer} ${theme==="light"?style.footerLight:style.footerDark}` }>{text}
        <div className={style.mid}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Go←Back</li>
        </ul>
        </div>
        <div className={style.mid}>
        <ul>
            <li>Cart</li>
            <li>Section</li>
            <li>UI App</li>
            <li>Go←Back</li>
        </ul>
        </div>
        <div className={style.mid}>
        <ul>
            <li>Keep simple</li>
            <li>History</li>
            <li>UPI</li>
            <li>Go←Back</li>
        </ul>
        </div>
        <div className={style.mid}>
        <ul>
            <li>Away</li>
            <li>Bok</li>
            <li>SI</li>
            <li>Go←Back</li>
        </ul>
        </div>
        
      
    </div>
  )
}

export default Footer