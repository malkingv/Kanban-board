import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header'
import './style.css'
import MainBlock from "./components/MainBlock/MainBlock";
import Footer from "./components/Footer/Footer";
import array from "./components/MainBlock/array";

const root = ReactDOM.createRoot(document.getElementById('root'));


function Main(){
    if (localStorage.length === 0) { localStorage.setItem('array', JSON.stringify(array)) }
    const [arr, setArr] = useState(JSON.parse(localStorage.getItem('array')))

    useEffect( () => {
        MainBlock({arr, setArr})
        Footer()
    },[arr])

    const [location, setLocation] = useState({location: window.location})
    const handlePopState = (event) => {
        event.preventDefault()
        window.history.pushState(null, null, event.target.href)
        setLocation({location: window.location})
    }
    useEffect(() => {
        window.addEventListener("popstate", handlePopState)
    }, [])

    return (
        <div >

                <Header/>
                <MainBlock arr={arr} setArr={setArr}/>
                <Footer/>

        </div>
    )
}

root.render(

        <Main />

);
