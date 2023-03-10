import React from "react";
import Navbar from './logIn/Navbar'
import './header.css'

const Header = () => {
    return(
        <div  className={'header'}>
            <div className={'container'}>
                <h1>Awesome Kanban Board</h1>
                <Navbar/>
            </div>

        </div>
    )
}

export default Header