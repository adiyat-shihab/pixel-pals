import { twitchToken } from "@/components/utils/twitchToken";

export const igdb = async (details) => {
  const token = await twitchToken();
  const data = await fetch(`https://api.igdb.com/v4/${details?.query}`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
    body: `fields *; ${details?.bodyFields}`,
    next: {
      revalidate: 10,
    },
  });
  return data.json();
};
