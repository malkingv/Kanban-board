import React from "react";
import './MainBlock.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TaskDetails from "./TaskDetails/TaskDetails";
import NotFound from "./NotFound/NotFound";
import AllCards from "./AllCards/AllCards";
const MainBlock = ({arr, setArr}) => {


    return(
        <div className={'main'} key={'main'}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<AllCards arr={arr} setArr={setArr}/>} />
                    {
                        JSON.parse(localStorage.getItem('array')).map(e => e.hasOwnProperty('id')
                            ? <Route key={e.id} path={`/task/${e.id}`} element={<TaskDetails data={e} setArr={setArr} />} />
                            : null)
                    }
                    <Route path={'*'} element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default MainBlock