import { useEffect, useState } from "react";
import Image from "next/image";

function Player() {
  const [token, setToken] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZF1DXapA9ZXglqsQ`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setPlaylist(data);
    };
    if (token) {
      fetchPlaylist();
    }
  }, [token]);

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Please log in to Spotify</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Playlist</h1>
      <div className="flex flex-col items-center justify-center">
        <img src={playlist?.images[0].url} alt="playlist" className="w-52" />

        <h1 className="text-4xl font-bold">{playlist?.name}</h1>
        <button
          onClick={() => {
            const audio = new Audio(
              playlist?.tracks.items[0].track.preview_url
            );
            audio.play();
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Play
        </button>
        <button
          onClick={() => {
            const audio = new Audio(
              playlist?.tracks.items[0].track.preview_url
            );
            audio.pause();
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default Player;
