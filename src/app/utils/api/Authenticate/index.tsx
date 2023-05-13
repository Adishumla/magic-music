//authenticate user and set token in local storage and state from spotify api

export const authenticateUser = async () => {
  const response = await fetch(
    `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI}&scope=${process.env.NEXT_PUBLIC_SPOTIFY_SCOPES}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};
