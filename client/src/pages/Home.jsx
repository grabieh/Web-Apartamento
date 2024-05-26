import { useState } from "react";
import { Header } from '../components/Header.jsx'
import { HomeImg } from '../components/HomeImg.jsx'
import { Footer } from '../components/Footer.jsx'
import '../App.css'
import { ApartmentInfo } from '../components/ApartmentInfo.jsx'

export const Home = () => {
    const [language, setLanguage] = useState('1')

    return (
        <div>
            <Header language={language} setLanguage={setLanguage}/>

            <div className=' flex justify-center mt-32 mb-9'>
            <HomeImg />
            </div>

            <ApartmentInfo language={language}/>
            <Footer />
        </div>
    )
}



