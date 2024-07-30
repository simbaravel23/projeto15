// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import VideoList from './VideoList';
import VideoPlayer from './Video.Player';
import './VideoGallery.css';

const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/BRp8y3EF9yM?si=-gqAhwttoYNrsaJg" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/live/PWU_8EHx9L0?feature=shared" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/live/016e8g5bR_w?feature=shared" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/live/HEo_m532kTQ?feature=shared" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/live/80YIvsLMrM0?feature=shared" },
  { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/VIDEO_ID_6" },
  { id: 7, title: "Video 7", url: "https://www.youtube.com/embed/VIDEO_ID_7" },
  { id: 8, title: "Video 8", url: "https://www.youtube.com/embed/VIDEO_ID_8" },
  { id: 9, title: "Video 9", url: "https://www.youtube.com/embed/VIDEO_ID_9" },
  { id: 10, title: "Video 10", url: "https://www.youtube.com/embed/VIDEO_ID_10" },
  { id: 11, title: "Video 11", url: "https://www.youtube.com/embed/VIDEO_ID_11" },
  { id: 12, title: "Video 12", url: "https://www.youtube.com/embed/VIDEO_ID_12" },
  { id: 13, title: "Video 13", url: "https://www.youtube.com/embed/VIDEO_ID_13" },
  { id: 14, title: "Video 14", url: "https://www.youtube.com/embed/VIDEO_ID_14" },
  { id: 15, title: "Video 15", url: "https://www.youtube.com/embed/VIDEO_ID_15" },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="video-gallery">
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      <VideoPlayer video={selectedVideo} />
    </div>
  );
};

export default VideoGallery;
