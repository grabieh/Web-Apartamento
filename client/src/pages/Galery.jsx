import { useState } from "react";
import { Header } from "../components/Header.jsx";
import '../App.css'
import { ImageGrid } from "../components/ImageGrid.jsx";
import { Footer } from "../components/Footer.jsx";

export const Galery = () => {
    const [language, setLanguage] = useState('1')
    return (
        <div>
            <Header language={language} setLanguage={setLanguage}/>
            <div className=' flex justify-center mt-32 mb-9'>
            <ImageGrid/>
            </div>
            <Footer/>
        </div>
    )
}

