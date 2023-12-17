import Navsec from '@/components/navsec/Navsec'
import YouTubeVideo from '@/components/youtubevideo/YouTubeVideo'
import React from 'react'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Navsec />
                <hr />
                <br />
                <h1>Videos sobre MAT</h1>
                <br />
                <p>Aquí encontrarás videos de nuestro canal de YouTube
                    con mucha información sobre MAT y temas relacionados.
                </p>
                <br />
                <br />
                <YouTubeVideo
                    videoId="V8Ibbkru8EI"
                />
                <br />
                <br />
                <YouTubeVideo
                    videoId="_BA9XTPIkVM"
                />
            </div>
        </div>
    )
}

export default page