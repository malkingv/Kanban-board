import React, {useState} from "react";
import cn from "classnames";
import arrow from './arrow.svg'
import './ReplaceTasks.css'

const ReplaceTasks = ({setVisible, setArr, getTrueTask}) => {
    const [open, setOpen] = useState(false)
    const canAdd = JSON.parse(localStorage.getItem('array')).some(e => e.status === getTrueTask(false))

    const handleReplace = (id) => {
        let prevData = JSON.parse(localStorage.getItem('array'))
        const removedItem = prevData.splice(prevData.indexOf(prevData.find((item) => item.id === id)), 1) // Поиск по id, удаление из массива
        removedItem[0].status = getTrueTask(true) // Замена статуса
        prevData.push(removedItem[0]) // Возврат в конец массива
        localStorage.setItem('array', JSON.stringify(prevData))

        setArr(prevData) // Будет запущен ререндер
        setVisible(false)
    }
    return(
        <div>
            <div onClick={() => canAdd ? setOpen(!open) : null}>
                <div className={cn('dropdownArrow', {'rotateArrow': open}, {'canAdd': canAdd})}>
                    <img className={'arrow'} src={arrow} alt={'arrow'}/>
                </div>

                { open &&
                    <ul  className={'notBacklog'} onMouseLeave={() => setOpen(!open)} >
                        {
                            JSON.parse(localStorage.getItem('array')).map(el =>
                                el.status === getTrueTask(false)  ?
                                    <li className={'notBacklogTask'}  key={el.id} onClick={() => handleReplace(el.id)}>{el.name}</li>
                                    : null)
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default ReplaceTasks