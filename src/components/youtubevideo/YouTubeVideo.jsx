import React from 'react'
import styles from './youtubevideo.module.css'

const YouTubeVideo = ({ videoId, title }) => {
    return (
        <div className={styles.video}>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default YouTubeVideo
