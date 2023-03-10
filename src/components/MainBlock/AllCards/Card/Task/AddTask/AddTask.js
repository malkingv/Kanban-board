import React, {useState} from "react";
import '../Task.css'
import cn from "classnames";
import './AddTask.css'
import ReplaceTasks from "./ReplaceTasks/ReplaceTasks";
import NewTask from "./NewTask/NewTask";

const AddTask = ({dataName, setArr}) => {

    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false)
    const [description, setDescription] = useState('')
    const handleAddTask = (e) => {
        e.preventDefault()
        setVisible(!visible)
        if (name !== ''){ // Если имя задачи введено то добавляем её в массив
            let prevStorage = JSON.parse(localStorage.getItem('array'))
            const addItem = {
                status: 'Backlog',
                id: prevStorage.length - 1,
                name: `${name}`,
                description: `${description}`
            }
            prevStorage.push(addItem)
            localStorage.setItem('array', JSON.stringify(prevStorage))
            setArr(prevStorage) // Будет запущен ререндер
        }
        setName('')
        setDescription('')
    }
    const getTrueTask = (isNext) => { // Возвращает текущий статус или следующий статус задачи
        const types = ['Backlog', 'Ready', 'In progress', 'Finished']
        return isNext ? types[types.indexOf(dataName)] : types[types.indexOf(dataName) - 1]
    }


    return(
        <form >
            <div className={cn('inputBlock', {'visible': !visible})}>
                {
                    dataName === 'Backlog' && visible
                        ? <NewTask name={name} setName={setName} desription={description} setDescription={setDescription} />
                        : <ReplaceTasks setVisible={setVisible} getTrueTask={getTrueTask} setArr={setArr}/>
                }
            </div>
            <button className={cn('addBtn', {'submitBtn' : name !== ''})} onClick={e => handleAddTask(e)}>
                { name === '' ? '+ Add card' : 'Submit' }
            </button>
        </form>
    )
}

export default AddTask