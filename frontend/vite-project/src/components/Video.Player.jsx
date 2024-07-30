import React from 'react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={video.url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
