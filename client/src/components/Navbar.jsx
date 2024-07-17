import React, {useRef} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import '../style/navbar.css'
export default function Navbar() {

const navRef = useRef();

const showNavBar = () =>{
    navRef.current.classList.toggle("move_nav");
}



  return (
    <div>
      <header>
        <div> <a><img src='#'></img></a></div>

        <nav ref={navRef}>
            <a href='/'>Inicio</a>
            <a href='/componente2'>Componente2</a>
            <a href='/'>About us</a>
            <a href='/'>Products</a>
            <button className='nava' onClick={showNavBar}>
            <FaTimes></FaTimes>

            </button>
        </nav>
        <button className='nava' onClick={showNavBar}>
            <FaBars></FaBars>
        </button>
      </header>
    </div>
  )
}
