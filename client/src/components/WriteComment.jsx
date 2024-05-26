import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';


export const WriteComment = ({onCommentSubmit}) => {
    const [newComment, setNewComment] = useState({
        puntuacion: '',
        comentario: ''
    })

    const handleInput = (e) => {
        setNewComment(prev => ({...prev, [e.target.name]: [e.target.value]}))
    }
    const handleRatingChange = (e) => {
        setNewComment(prev => ({...prev, puntuacion: e.target.value}))
    }
    const handleCreate = (e) => {
        e.preventDefault()
        onCommentSubmit(newComment)
        setNewComment({
            puntuacion: e.value = 5,
            comentario: e.value = ''
        })
    }
    return (
        <div className=' w-full flex flex-col items-center justify-center'>
            <h2 className=' font-bold text-4xl'>Write a Review/Comment</h2>
            <br />
            <br />
            <form onSubmit={handleCreate} className=' box-border w-2/3 border-2 rounded-3xl'>
                <div className='bg-white h-auto mt-3 mx-6 flex justify-start items-center'>
                    <span className='mb-3 mt-3'>Score:</span>
                    <Rating name="puntuacion" required onChange={handleRatingChange} className='ml-12' defaultValue={5} max={10} />
                </div>
                <div className=' bg-white m-6'>
                    <TextField 
                    id="standard-multiline-static"
                    label='Comment'
                    name='comentario'
                    multiline
                    className=' w-full'
                    variant="standard"
                    required
                    onChange={handleInput}/>
                </div>
                <div className='flex justify-center'>
                <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-base font-semibold rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Submit</button>
                </div>
            </form>
        </div>
    )
}