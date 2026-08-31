import YouTubeVideo from '@/components/youtubevideo/YouTubeVideo'
import React from 'react'

const page = () => {

    const idVideo = [
        {
            id: 1,
            hush: 'V8Ibbkru8EI',
        },
        {
            id: 2,
            hush: 'SdBq6CVcYtA',
        },
        {
            id: 3,
            hush: 'Jak9ybw8xnE',
        },
        {
            id: 4,
            hush: 'vQee-VaSj-c',
        },
        {
            id: 5,
            hush: 'cr0_4C3fcLw',
        },
        {
            id: 6,
            hush: 'nTC3O_1g-0A',
        },
    ]

    return (
        <div className='bg-blue-50 px-10 py-5 lg:px-20 lg:py-10'>
            <h1 className='text-xl lg:text-2xl text-red-800 mx-5 my-3'>Videos sobre MAT</h1>
            <hr className='border-red-800 mx-5' />
            <br />
            <p className='p-6 text-xl'>Aquí encontrarás videos de nuestro canal de YouTube con mucha información sobre MAT
                y temas relacionados.
            </p>
            <div className='flex flex-wrap gap-5 p-3 mt-5'>
                {
                    idVideo.map((item, index) => (
                        <div className='basis-full lg:basis-5/12 m-auto' key={index}>
                        <YouTubeVideo
                            videoId={item.hush}
                        />
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page
