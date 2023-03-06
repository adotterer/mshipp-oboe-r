import AudioPlayer from "../components/AudioPlayer";

const Audio = () => {
  const audioBP = [
    {
      URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/audio_5_Coleman.wav",
      composer: "Valerie Coleman",
      id: 1,
      performers: "The Philadelphia Orchestra",
      title: "UMOJA Anthem of Unity for orchestra (2nd oboe solo)",
    },
    {
      URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/audio_7_van.wav",
      composer: "Ludwig van Beethoven",
      id: 2,
      performers: "Temple Symphony Orchestra",
      title: "Symphony No. 5, I. Allegro con brio",
    },
    {
      URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/audio_8_van.wav",
      composer: "Ludwig van Beethoven",
      id: 3,
      performers: "Temple Symphony Orchestra",
      title: "Symphony No. 5, II. Andante con moto",
    },
    {
      URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/audio_4_Hindemith-NORMALIzed.wav",
      composer: "Paul Hindemith",
      id: 4,
      performers: "Temple Symphony Orchestra",
      title: "Symphonic Metamorphosis of Themes by Carl Maria von Weber",
    },
    {
      URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/audio_20_Milhaud.wav",
      composer: "Darius Milhaud",
      id: 5,
      performers: "Temple Symphony Orchestra",
      title: "La création du monde",
    },

    {
      URL: "https://mshippoboe.s3.us-west-1.amazonaws.com/brahms4-reading-clip-fades_normalized.wav",
      composer: "Johannes Brahms",
      id: 6,
      performers: "Reading Symphony Orchestra",
      title: "Symphony No. 4 in E minor, I. Allegro non troppo ",

    }
  ];


  return (
    <div className="container" id="audio_container">
      <title>Matthew Shipp | Oboe | Audio</title>
      <AudioPlayer tracklists={audioBP} />
    </div>
  );
};

export default Audio;
