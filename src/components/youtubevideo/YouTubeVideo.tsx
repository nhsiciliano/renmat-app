import styles from "./youtubevideo.module.css";

type YouTubeVideoProps = {
  videoId: string;
};

export default function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className={styles.video}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
