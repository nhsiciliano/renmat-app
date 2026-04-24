type YouTubeVideoProps = {
  videoId: string;
};

export default function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className="relative aspect-video w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
