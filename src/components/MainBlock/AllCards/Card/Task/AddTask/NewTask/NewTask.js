import React from "react";
import './NewTask.css'

const NewTask = ({name, setName, description, setDescription}) => {

    const onChange = (e) => { // Событие изменение инпутов
        e.name === 'name' ? setName(e.value.slice(0, 100)) : setDescription(e.value)
        e.style.height = '21px';
        e.style.height = `${e.scrollHeight - 12}px`
    }
    return(
        <div>
            <p>Add new task</p>
            <textarea name={'name'} className={'input'} value={name} onChange={e => onChange(e.target)} placeholder={'Enter name'} ></textarea>
            <textarea className={'input'} value={description} onChange={e => onChange(e.target)} placeholder={'Enter description'} ></textarea>
        </div>
    )
}

export default NewTask
