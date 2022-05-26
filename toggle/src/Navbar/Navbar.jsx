import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContextProvider';
import style from "./Navbar.module.css"

const Navbar = ({text}) => {

    const [theme] = useContext(ThemeContext);


  return (
    <div className={style.cont}>
        <div className={`${style.buttonBase} ${theme==="light"?style.buttonlight:style.buttondark}`} >{text}
            <h1>THEME CONTEXT</h1>
            <h2>CHANGE COLOR</h2>
        </div>
        {/* <div className={`${style.footer} ${theme==="light"?style.footerLight:style.footerD}` }>{text}
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
        
      
    </div> */}

    </div>
  )
}

export default Navbar