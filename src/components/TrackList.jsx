("use client");

import { useMusicPlayer } from "../hooks/useMusicPlayer";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

const TrackList = () => {
  const music = useMusicPlayer();

  return (
    <div>
      {music.trackList.map((track, index) => {
        return (
          <div key={`${track.name}_${index}`}>
            <button onClick={() => music.playTrack(index)}>
              {music.isPlaying && music.currentTrackIndex == index ? (
                <PauseFill />
              ) : (
                <PlayFill />
              )}
            </button>
            <div>Track Playing: {track.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackList;
