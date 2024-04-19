export const twitchToken = async () => {
  const token = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_SECRET}&grant_type=client_credentials`,
    {
      method: "POST",
      next: {
        revalidate: 50,
      },
    },
  );
  const json = await token.json();
  return json.access_token;
};
