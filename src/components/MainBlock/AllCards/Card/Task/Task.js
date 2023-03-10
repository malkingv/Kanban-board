import React from "react";
import './Task.css'
import {Link} from "react-router-dom";

const Task = ({data}) => {
    return(
        <div className={'task'} >
            <Link  to={`/task/${data.id}` }>{data.name}</Link>
        </div>

    )
}

export default Task