import React from "react";
import {Link} from "react-router-dom";
import './NotFound.css'
export default function NotFound () {
    return (
        <div className={'not-found'}>
            <p>Page Not Found</p>
            <Link  to={`/`}>Visit Homepage?</Link>
        </div>

    )
}