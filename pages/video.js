import { useState } from "react";
import Head from "next/head";

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
    performers: `The Philadelphia Orchestra`,
    conductor: "Yannick Nézet-Séguin",
    soloist: "Haochen Zhang, piano",
    hall: "NHK Hall, Tokyo, Japan",
    title: "Piano Concerto No. 2 in C minor Op. 18",
  },
  {
    URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/compressed_grand_partita.mp4",
    composer: "Wolfgang Amadeus Mozart",
    id: 4,
    performers: `Temple Wind Symphony`,
    conductor: "Patricia Cornett",
    hall: "Rock Hall, Philadelphia",
    title: "The Serenade No. 10 `Gran Partita`",
  },
];
const Video = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoBP[0]);

  return (
    <>
      <Head>
        <title>Matthew Shipp | Oboe | Video</title>
      </Head>
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
          {selectedVideo.URL?.includes("youtube") ? (
            <iframe
              className="iframe-video"
              src={selectedVideo.URL}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              // autoPlay
              controls
              className="iframe-video"
              src={selectedVideo.URL}
              // title="YouTube video player"
              // frameborder="0"
              // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></video>
          )}

          <div className="selected-video-performers">
            <h4>{selectedVideo.title}</h4>

            {selectedVideo?.conductor && (
              <figcaption>{selectedVideo?.conductor}</figcaption>
            )}
            {selectedVideo?.soloist && (
              <figcaption>{selectedVideo?.soloist}</figcaption>
            )}
            {selectedVideo?.hall && (
              <figcaption>{selectedVideo?.hall}</figcaption>
            )}

            <p>{selectedVideo.performers}</p>
          </div>
        </div>
      </div>
      {videoBP &&
        videoBP.map((tracklist) => {
          return (
            <link
              key={tracklist.URL}
              rel="preload"
              as="video"
              href={tracklist.URL}
            ></link>
          );
        })}
    </>
  );
};

export default Video;
