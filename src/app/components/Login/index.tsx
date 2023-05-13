import { useEffect } from "react";
import { useState } from "react";

function Login() {
  const [count, setCount] = useState(0);
  const url = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&scope=&show_dialog=true&response_type=token&redirect_uri=http://localhost:3000`;
  const [token, setToken] = useState(null);
  if (window.location.hash) {
    const token = window.location.hash.split("=")[1].split("&")[0];
    token && localStorage.setItem("token", token);
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Spotify</h1>
      <a href={url}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
          Login to Spotify
        </button>
      </a>
    </div>
  );
}

export default Login;
