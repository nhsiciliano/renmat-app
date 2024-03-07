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
            </div>
            <div className={styles.contvideo}>
                <div className={styles.video}>
                <YouTubeVideo
                    videoId="V8Ibbkru8EI"
                />
                </div>
                <div className={styles.video}>
                <YouTubeVideo
                    videoId="SdBq6CVcYtA"
                />
                </div>
                <div className={styles.video}>
                <YouTubeVideo
                    videoId="Jak9ybw8xnE"
                />
                </div>
                <div className={styles.video}>
                <YouTubeVideo
                    videoId="vQee-VaSj-c"
                />
                </div>
                <div className={styles.video}>
                <YouTubeVideo
                    videoId="cr0_4C3fcLw"
                />
                </div>
                <div className={styles.video}>
                <YouTubeVideo
                    videoId="nTC3O_1g-0A"
                />
                </div>
            </div>
        </div>
    )
}

export default page