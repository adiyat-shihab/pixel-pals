export const rawg = async ({ pageParam }) => {
  const data = await fetch(
    `https://api.rawg.io/api/games?key=${
      process.env.NEXT_PUBLIC_RAWG_API_KEY
    }&page=${pageParam || 1}&page_size=30`,
  );
  return await data.json();
};
