
export const Comments = ({ comments }) => {

    return (
        <div className='w-full flex flex-col items-center justify-center mt-32 mb-9'>

            <h2 className=' mb-24 font-bold text-4xl'>Comments & Reviews</h2>

            {comments && comments.map((review, index) => (
                <div key={index} className='flex flex-col justify-evenly items-start mb-3 w-1/2 min-h-28 rounded-2xl shadow-md hover:scale-110 hover:bg-zinc-50'>
                    <div className=' flex justify-start  pt-3.5 pl-8'>
                        <div className=' font-sans font-semibold pr-4'>Rating: </div>
                        <span>{review.puntuacion}/10</span>
                    </div>
                    <div className=' flex justify-start pb-3.5 pl-8'>
                        <div className='font-sans font-semibold pr-4'>Comment: </div>
                        <div className=' max-w-3xl'>{review.comentario}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
