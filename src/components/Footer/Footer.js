import React from "react";
import './Footer.css'

const Footer = () => {
    const arr = JSON.parse(localStorage.getItem('array'))
    return(
        <div className={'footer'}>
            <div className={'container'}>
                <div>
                    <span>Active tasks: {arr.filter(el => el.status === 'Backlog').length}</span>
                    <span>Finished tasks: {arr.filter(el => el.status === 'Finished').length}</span>
                </div>
                <div>
                    Kanban board by {`${arr[0].firstName } ${arr[0].lastName}`}, {new Date().getFullYear()}
                </div>
            </div>

        </div>
    )
}

export default Footer