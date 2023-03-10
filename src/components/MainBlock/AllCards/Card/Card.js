import React from "react";
import './Card.css'
import Task from "./Task/Task";
import AddTask from "./Task/AddTask/AddTask";

const Card = ({name, data , arr , setArr}) => {
    return(
        <div className={'card'}>
            <h3>{name}</h3>
            <div className={'card-container'} >
                {   data.map(elem => <Task name={name} data={elem} key={elem.id} />)    }
                {
                    <AddTask data={data} dataName={name} arr={arr} setArr={setArr}/>
                }
            </div>
        </div>
    )

}

export default Card
