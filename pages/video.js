// import { useState, useRef } from 'react';
// import AudioPlayer from "../components/AudioPlayer";

const Video = () => {



  return (
    <div className="container" id="video_container">
     <iframe
      width="100%"
      height="100%"
      src="{{bannerWidgetVideoLink}}"
      title="{{bannerWidgetTitle}}"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </div>
  );
};

export default Video;
