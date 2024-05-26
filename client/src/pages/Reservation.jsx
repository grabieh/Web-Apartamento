import { useState } from "react";
import { Header } from "../components/Header.jsx";
import '../App.css'

export const Reservation = () => {
    const [language, setLanguage] = useState('1')
    return (
        <div>
            <Header language={language} setLanguage={setLanguage}/>
        </div>
    )
}