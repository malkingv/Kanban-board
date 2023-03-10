import React, {useState} from "react";
import goBack from "./goBack.svg";
import './TaskDetails.css'
import './goBack.svg'

export default function TaskDetails(props) {
    const [name, setName] = useState(props.data.name)
    const [description, setDescription] = useState( props.data.description !== '' ? props.data.description : 'This task has no description')

    const onChange = (e) => { // Событие изменение инпутов
        e.name === 'name' ? setName(e.value.slice(0, 100)) : setDescription(e.value)
    }
    const saveAndExit = () => {
        const newItem = {...props.data, name: name, description: description}
        let newArray = JSON.parse(localStorage.getItem('array')).map(e => e.id === props.data.id ? newItem : e)
        localStorage.setItem('array', JSON.stringify(newArray))
        props.setArr(newArray)
        window.history.go(-1)
    }
    console.log(window.location)
    return (
        <div className={'showDetails'}>
            <div className={'nameBlock'}>
                <input name={'name'} value={name} onChange={e => onChange(e.target) }/>
                <img className={'goBack'} src={goBack} onClick={() => saveAndExit()} alt={'X'}/>
            </div>

            <div className={'descBlock'}>
                <textarea className={'input'} value={description} onChange={e => onChange(e.target)} placeholder={'Enter description'} ></textarea>
            </div>

        </div>
    )
}
