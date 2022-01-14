
import React from 'react'
import './Navbar.css'
import NavbarLink from './NavbarLink'


function Navbar() {
    return (
        <div className="container">
            <NavbarLink text="Konverter" to="/konverter"/>
            <NavbarLink text="Tabela" to="/tabela" />
        </div>
    )
}

export default Navbar
