"use client";
import { rawg } from "@/components/utils/rawg";
import { Card, CardHeader } from "@/components/ui/card";
import MainImage from "@/components/ui/MainImage";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const Page = () => {
  const [hasMore, setHasMore] = useState(true);
  const [gameLength, setGameLength] = useState(0);
  const {
    data: games,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["Games"],
    queryFn: rawg,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.next) return undefined; // Check if there's a next page URL

      const url = new URL(lastPage.next);
      // Assuming 'page' is the query parameter for pagination
      return url.searchParams.get("page");
    },
  });
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNextPage();
    }, 1500); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval);
  }, []);
  // const fetchMore = () => {
  //   fetch(nextUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setGames((prevItems) => [...prevItems, ...data.results]);
  //       setNextUrl(data.next);
  //       data.results.length > 0 ? setHasMore(true) : setHasMore(false);
  //     });
  // };
  return (
    // <InfiniteScroll
    //   next={fetchNextPage}
    //   loader={""}
    //   dataLength={100}
    //   hasMore={hasMore}
    // >
    <div className={"text-white grid grid-cols-4 px-20 gap-y-9 "}>
      {games?.pages?.map((page) =>
        page.results.map((game) => {
          return (
            <Card
              key={game.id}
              className={"w-fit border-neutral-800 bg-neutral-800 mx-auto  "}
            >
              <CardHeader className={"p-0 border-neutral-800  "}>
                <MainImage
                  game_image={game?.background_image}
                  game_name={game.name}
                  custom_style={"object-cover rounded-lg h-48 w-[22rem]"}
                />
              </CardHeader>
            </Card>
          );
        }),
      )}
    </div>
    // </InfiniteScroll>
  );
};

export default Page;
