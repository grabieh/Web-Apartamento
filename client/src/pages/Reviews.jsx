import { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { Comments } from "../components/Comments.jsx";
import '../App.css'
import { WriteComment } from "../components/WriteComment.jsx";
import axios from 'axios'

export const Reviews = () => {
    const [language, setLanguage] = useState('1')
    const [comments, setComments] = useState(null)

    useEffect(() =>{
        const fetchData = async() => {
            const res = await axios.get('http://localhost:1234/reviews/')
            setComments(res.data)
        }

        fetchData()
    },[])

    const addComment = async(newComment) => {
        const res = await axios.post('http://localhost:1234/reviews/generate', newComment)
        setComments(prevComments => [...prevComments, res.data])
    }

    return (
        <div>
            <Header language={language} setLanguage={setLanguage}/>
            {comments && <Comments comments={comments}/>}
            <WriteComment onCommentSubmit={addComment}/>
            <Footer />


        </div>
    )
}