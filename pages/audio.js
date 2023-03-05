import { useState, useRef } from 'react';
import AudioPlayer from "../components/AudioPlayer"


const Audio = () => {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioBP = [{
    URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/audio_19_Brahms.wav",
    composer: "Johannes Brahms",
    id: 19,
    performers: "Andrew Dotterer, oboe",
    title: "12AM CF",
  }];
  console.log(audioBP, "audioBP")
  // const handleAudioSelection = (audio) => {
  //   setSelectedAudio(audio);
  //   setIsPlaying(true);
  // };

  // const handleTogglePlay = () => {
  //   if (isPlaying) {
  //     audioRef.current.pause();
  //   } else {
  //     audioRef.current.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const handleRewind = () => {
  //   audioRef.current.currentTime = 0;
  //   audioRef.current.play();
  // };


  return (
    <div className="container center" id="audio_container">
      <h2>Coming soon!</h2>
      <AudioPlayer tracklists={audioBP} />
      
      {/* <div>
        {audioFiles.map((audio) => (
          <button key={audio} onClick={() => handleAudioSelection(audio)}>
            {audio}
          </button>
        ))}
      </div>
      {selectedAudio && (
        <div>
          <audio ref={audioRef} src={selectedAudio} />
          <button onClick={handleTogglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleRewind}>Rewind</button>
        </div>
      )} */}
    </div>
  );
};

export default Audio;
