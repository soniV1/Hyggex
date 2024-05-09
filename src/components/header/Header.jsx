import React from "react";
import logo from '../../images/logo.svg'

function Header(){
    return(
        <>
        <div className="relative">
        <img  className="w-191 h-39 absolute top-32 left-104" src={logo} alt='logo'/>
        </div>
        </>
    )
}

export default Header;