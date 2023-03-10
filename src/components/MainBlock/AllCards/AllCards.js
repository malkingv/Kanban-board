import React from "react";
import Card from "./Card/Card";

export default function AllCards ({arr, setArr}) {
    return(
        <>
            <Card name={'Backlog'}  data={arr.filter(elem => elem.status === 'Backlog')} setArr={setArr} />
            <Card name={'Ready'} data={arr.filter(elem => elem.status === 'Ready')} setArr={setArr}/>
            <Card name={'In progress'} data={arr.filter(elem => elem.status === 'In progress')} setArr={setArr}/>
            <Card name={'Finished'} data={arr.filter(elem => elem.status === 'Finished')} setArr={setArr}/>
        </>
    )
}