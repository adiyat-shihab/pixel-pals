import Image from "next/image";
import { twitchToken } from "@/components/utils/twitchToken";
import { igdb } from "@/components/utils/IGDB/igdb";

const Page = async () => {
  const token = await twitchToken();
  const data = await igdb({
    query: "release_dates",
    bodyFields:
      "fields *; where created_at >= 1704067200; sort date desc; limit 10;",
  });
  const gamesCoverPromises = data.map(async (date) => {
    return await igdb({
      query: "covers",
      bodyFields: `where id = ${date.game};`,
    });
  });

  const gamesCover = await Promise.all(gamesCoverPromises);
  const oneGameCover = gamesCover.flat();
  const uniqueGameIds = new Set();
  const uniqueGamesCover = oneGameCover.filter((gameCover) => {
    const isDuplicate = uniqueGameIds.has(gameCover?.game);
    uniqueGameIds.add(gameCover?.game);
    return !isDuplicate;
  });

  const latestGames = await igdb({
    query: "games",
    bodyFields:
      "fields *, cover.*; limit 10; where first_release_date >= 1704067200 & aggregated_rating_count > 4;",
  });
  console.log(latestGames);

  return (
    <div className={"relative"}>
      {latestGames.map((image) => {
        return (
          <Image
            key={image.id}
            src={`https://${image?.cover?.url || ""}`}
            alt={image.name}
            width={500}
            height={500}
            className="w-[200px] h-[100px]"
          />
        );
      })}
    </div>
  );
};

export default Page;
