import React, { useState } from 'react';
import VideoList from './VideoList';
import VideoPlayer from './Video.Player';


const videos = [
  { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/BRp8y3EF9yM?si=-gqAhwttoYNrsaJg" },
  { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/PWU_8EHx9L0?si=dqeNXxr5jcTO0q3r" },
  { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/016e8g5bR_w?si=qTLb1HlcoNqj0WpQ" },
  { id: 4, title: "Video 4", url: "https://www.youtube.com/embed/HEo_m532kTQ?si=qHmWqP2HVQt2b1cX" },
  { id: 5, title: "Video 5", url: "https://www.youtube.com/embed/80YIvsLMrM0?si=40EnGFtBjob7KlnI" },
  { id: 6, title: "Video 6", url: "https://www.youtube.com/embed/cTwj684xFZI?si=zUtPxmYAdTSbBl1Q" },
  { id: 7, title: "Video 7", url: "https://www.youtube.com/embed/Q_lVb9PRjHE?si=R6SMXonyT9_-mo1e" },
  { id: 8, title: "Video 8", url: "https://www.youtube.com/embed/VJlsFW-DIZs?si=L6VJ9FSyod7I3six" },
  { id: 9, title: "Video 9", url: "https://www.youtube.com/embed/DwfpTaMkycs?si=7YCKcTT-VhHDH_g1" },
  { id: 10, title: "Video 10", url: "https://www.youtube.com/embed/5VfAOU_a6nU?si=so4T-gvSnpV1RMeL" },
  { id: 11, title: "Video 11", url: "https://www.youtube.com/embed/PmJM-uUmZYw?si=Zr_dG845v9LdzY15" },
  { id: 12, title: "Video 12", url: "https://www.youtube.com/embed/1DcFocLhaq0?si=I17giAzmQ72A78dP" },
  { id: 13, title: "Video 13", url: "https://www.youtube.com/embed/vRsBW0CyxKg?si=SjtBo1-FxdmAi8fm" },
  { id: 14, title: "Video 14", url: "https://www.youtube.com/embed/c-3N7_wupQE?si=IgPCaBGqsDckrwHQ" },
  { id: 15, title: "Video 15", url: "https://www.youtube.com/embed/D7TtQ1YobDU?si=7jjNRT0ilhQIgGfh" },
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
