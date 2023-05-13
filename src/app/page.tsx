"use client";
import Image from "next/image";
import { fetchPlaylist } from "./utils/api/FetchPlaylist";
import Login from "./components/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Login />
    </main>
  );
}
