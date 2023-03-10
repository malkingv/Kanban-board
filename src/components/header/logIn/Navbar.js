import React, {useState} from "react";
import userArrow from './userArrow.svg'
import userLogo from './userLogo.svg'
import '../header.css'
import './Navbar.css'

export default function Navbar () {
    return(
        <NavItem>
            <DropdownMenu />
        </NavItem>
    )
}
function NavItem  (props) {
    const  [open, setOpen] = useState(false)
    return(
        <div>
            <a href='#' className={'logIn'} onClick={() => setOpen(!open)}>
                <img  className={'logo'} src={userLogo} alt={'logo'}/>
                <img src={userArrow} alt={'arrow'} height={'8px'}/>
            </a>
            {
                open && props.children
            }
        </div>
    )
}

function DropdownMenu (){
    function DropdownItem(props) {
        return(
            <a href='#' className={'menu-item'}>
                {props.children}
            </a>
        )
    }
    return (
        <div className={'dropdown-menu'}>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Log Out</DropdownItem>
        </div>
    )
}
