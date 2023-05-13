"use client";
import Image from "next/image";
import { use, useState, useEffect } from "react";
import Login from "./components/Login";
import Player from "./components/Player";

export default function Home() {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login onLogin={handleLogin} />
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setToken(null);
            window.history.pushState(
              "",
              document.title,
              window.location.pathname + window.location.search
            );
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Logout
        </button>
      </div>

      <div>
        {(token && (
          <div className="flex flex-col items-center justify-center">
            <Player token={token} />
          </div>
        )) || (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Please log in to Spotify</h1>
          </div>
        )}
      </div>
    </main>
  );
}
