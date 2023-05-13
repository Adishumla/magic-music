const playlistId = "37i9dQZF1DXcBWIGoYBM5M";
export const fetchPlaylist = async (playlistId: string) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await response.json();
  return data;
};
