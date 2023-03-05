import { useState, useRef } from 'react';

const AudioPlayer = ({ audioFiles }) => {
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioSelection = (audio) => {
    setSelectedAudio(audio);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRewind = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <div class="container center" id="div__bio_container">
      <h2>Coming soon!</h2>
      
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

export default AudioPlayer;
