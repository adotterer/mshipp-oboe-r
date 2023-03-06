import { useState } from "react";
// import AudioPlayer from "../components/AudioPlayer";

const videoBP = [
  {
    URL: "https://www.youtube.com/embed/eTiY56mubgo",
    composer: "Charles Gounod",
    id: 1,
    performers: `Hyerin Kim, flute
      Matt Shipp, oboe
      Laura Yawney, oboe
      Nicolas Carrasco, clarinet
      Ke Qi, clarinet
      Christopher Pawlowski, bassoon
      Stephen Rudman, bassoon
      Kenshi Miyatani, horn
      Kathryn Marks, horn`,
    title:
      "Petite Symphonie for Wind Nonet, Op. 216 (1885) Mvt III Scherzo: Allegro moderato",
  },
  {
    URL: "https://www.youtube.com/embed/Pf2Y8E9CD6A",
    composer: "Charles Gounod",
    id: 2,
    performers: `Hyerin Kim, flute
      Matt Shipp, oboe
      Laura Yawney, oboe
      Nicolas Carrasco, clarinet
      Ke Qi, clarinet
      Christopher Pawlowski, bassoon
      Stephen Rudman, bassoon
      Kenshi Miyatani, horn
      Kathryn Marks, horn`,
    title:
      "Petite Symphonie for Wind Nonet, Op. 216 (1885) Movement IV Finale: Allegretto",
  },
  {
    URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/rach-clip-imovie.mp4",
    composer: "Sergei Rachmaninoff",
    id: 3,
    performers: `Philadelphia Orchestra`,
    title:
      "Rachmaninov Piano Concerto No. 2 in C minor Op. 18",
  },

  //https://mshippoboe.s3.us-west-1.amazonaws.com/rach-clip-imovie.mp4
];
const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoBP[0]);

  return (
    <div className="container" id="video_container">
      <ul className="track__list">
        {videoBP &&
          videoBP.map((tracklist) => {
            return (
              <li
                key={tracklist.id}
                onClick={() => setSelectedVideo(tracklist)}
              >
                <i>{tracklist.title}</i> - {tracklist.composer}
              </li>
            );
          })}
      </ul>
      <div className="iframe">
        <iframe
          className="iframe-video"
          src={selectedVideo.URL}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="selected-video-performers">
          <h4>{selectedVideo.title}</h4>
          <p>{selectedVideo.performers}</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
