import { useState } from 'react';
import { Play, Subtitles } from 'lucide-react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCaptions, setShowCaptions] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className="video-container mb-8" aria-label={`Video: ${title}`}>
      {!isLoaded ? (
        <button 
          onClick={loadVideo}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label={`Video abspielen: ${title}`}
        >
          <div className="bg-accent text-white rounded-full p-4 mb-4">
            <Play size={32} />
          </div>
          <p className="font-medium text-primary">{title}</p>
          <p className="text-sm text-gray-500 mt-2">Klicken zum Abspielen</p>
        </button>
      ) : (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}${showCaptions ? '?cc_load_policy=1' : ''}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            aria-label={`YouTube Video: ${title}`}
          ></iframe>
          <button 
            onClick={() => setShowCaptions(!showCaptions)}
            className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
            aria-label={showCaptions ? "Untertitel ausschalten" : "Untertitel einschalten"}
          >
            <Subtitles size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
