import React from 'react'
import { Link } from 'react-router-dom'
import  '../Styles/Header.scss'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <>
    <nav>
        <h1>TeckeyStar</h1>
        <main>
            <HashLink to="/#home">Home</HashLink>
            <HashLink to="/#about">About</HashLink>
            <HashLink to="/#brands">Brands</HashLink>
            <Link to="/service">Services</Link>
            <Link to="/contact">Contact</Link>
        </main>
    </nav>

    </>
  )
}

export default Header