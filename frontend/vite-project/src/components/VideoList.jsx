import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      <ul>
        {videos.map(video => (
          <li key={video.id} onClick={() => onVideoSelect(video)}>
            {video.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
