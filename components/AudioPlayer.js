export default function AudioPlayer({tracklists}) {
  // const selectedAudio = tracklists[0];
  console.log("tracklists", tracklists)
  return (
    <div className="list__and__player">
      <ul className="track__list">
        {tracklists &&
          tracklists.map((tracklist) => {
            return (
              <li
                key={tracklist.id}
                onClick={() => setSelectedAudio(tracklist)}
              >
                <i>{tracklist.title}</i> - {tracklist.composer}
                <figcaption>{tracklist.performers}</figcaption>
              </li>
            );
          })}
      </ul>


      {/* {selectedAudio && (
        <figure className="audio__grid">
          <figcaption className="audio__title_composer">
            <span className="black__bg">{selectedAudio.title}</span>
            <div>
              <span className="black__bg composer">
                {selectedAudio.composer}
              </span>
            </div>
          </figcaption>
          <div className="audio__player">
            <audio controls src={selectedAudio.URL}></audio>
          </div>
          <figcaption className="audio__performers">
            <span className="black__bg">{selectedAudio.performers}</span>
          </figcaption>
        </figure>
      )} */}
    </div>
  );
}
