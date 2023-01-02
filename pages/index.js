import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";
import Link from "next/link";
import { useQuery, dehydrate, QueryClient } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useRouter } from "next/router";

import { useInfiniteQuery } from "react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ dehydratedState }) {
  const arr = dehydratedState.queries[0].state.data.results;

  const router = useRouter();

  const [necesaryData, setNecesaryData] = useState(arr);
  const [page, setPage] = useState(parseInt(router.query.page) || 1);
  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_APIKEY}&page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  async function handlePaginationChange() {
    setPage((prev) => prev + 1);
    const newData = await fetch(data.next);
    const res = await newData.json();
    setNecesaryData(necesaryData.concat(res.results));
  }

  return (
    <Layout>
      <Head>
        <title>Games Library</title>
      </Head>

      <InfiniteScroll
        dataLength={necesaryData.length}
        next={() => handlePaginationChange()}
        hasMore={true}
      >
        <section className="w-full grid grid-cols-2  gap-1 md:grid-cols-4 md:gap-4 md:p-10 p-2">
          {necesaryData.map((game, i) => {
            return (
              <article
                className="flex flex-col items-center my-2"
                key={`${game.id}${i}`}
              >
                <Link href={`game/${game.id}`}>
                  <Image
                    className="w-40 h-64 md:w-64 md:h-96 object-cover "
                    width={700}
                    height={500}
                    src={game.background_image}
                    alt="GAME IMAGE"
                  ></Image>

                  <h5 className=" w-40 md:w-64 bg-zinc-900 text-center py-4 text-fuchsia-600 font-bold text-lg">
                    {game.name}
                  </h5>
                </Link>
              </article>
            );
          })}
        </section>
      </InfiniteScroll>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let page = 1;
  if (context.query.page) {
    page = parseInt(context.query.page);
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_APIKEY}&page=${page}`
      ).then((result) => result.json())
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}
