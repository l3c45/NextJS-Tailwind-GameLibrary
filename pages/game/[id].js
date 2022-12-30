import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../../components/layout";
import Rating from "../../components/rating";
import mature from "../../public/rating/3.svg";
import teen from "../../public/rating/2.svg";
import everyone from "../../public/rating/1.svg";

const Game = (props) => {
  const {
    background_image,
    genres,
    name,
    description_raw,
    esrb_rating,
    platforms,
    released,
    tags,
    website,
    rating,
    rating_top,
    developers,
    publishers,
    results,
  } = props;

  const genresArr = genres.map((item) => item.name);
  const tagsArr=tags.map((item) => item.name).sort((a,b)=>a[0]>b[0]?1:-1)
 

  const esbr={
    2:everyone,
    3:teen,
    4:mature
  }

  console.log(tagsArr);
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex flex-row w-screen px-8">
        <div className="w-3/4">
          <section className=" rounded bg-zinc-900/90 p-4 my-4">
            <h2 className="text-3xl py-2">{name}</h2>
            <Rating rating={rating}></Rating>

            {description_raw.split("\n").map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </section>
          <section className="rounded bg-zinc-900/90 p-4 my-4">
            <h2>Plataformas</h2>

            {platforms.map((game, i) => {
              return (
                <div key={i}>
                  <h4>{game.platform.name}</h4>
                  <p>{game.released_at}</p>
                </div>
              );
            })}
          </section>
        </div>
        <aside className="w-1/4 rounded bg-neutral-900 p-4 my-4 ml-4 ">
          <Image
            className="py-2 h-48 object-cover"
            width={500}
            height={500}
            src={background_image}
            alt={"Videogame Image"}
          ></Image>

          <p className="italic text-gray-400">Lanzamiento:</p>
          <p className="text-right">{released}</p>

          <p className="italic text-gray-400">Editor:</p>
          <p className="text-right">{publishers[0].name}</p>

          <p className="italic text-gray-400">Web Oficial:</p>
          <p className="text-right w-full">
          
            <a href={website} target="_blank" rel={"noreferrer"}>
              {website}
            </a>
          </p>

          <p className="italic text-gray-400">Clasificacion:</p>
          <div className="flex justify-end">

    
            <Image
              src={esbr[esrb_rating.id]}
              alt={"Clasification ESBR"}
              width={50}
              height={50}
            ></Image>
          </div>
          <p className="italic text-gray-400">Generos:</p>
          <div className="flex justify-end flex-wrap">
            {genresArr.map((item, i) => (
              <span
                className="bg-fuchsia-400 m-1 px-1  rounded text-zinc-900"
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
          
            <p className="italic text-gray-400"> Tags:</p>
            <div className="flex justify-end flex-wrap">
            {tagsArr.map((item, i) => (
              <span
                className="bg-zinc-800 m-1 px-1  rounded text-fuchsia-400"
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default Game;

export const getServerSideProps = async ({ params: { id } }) => {
  const preGameData = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_APIKEY}`
  );
  const preTrailer = await fetch(
    `https://api.rawg.io/api/games/${id}/movies?key=${process.env.NEXT_PUBLIC_APIKEY}`
  );

  const gameData = await preGameData.json();
  const trailer = await preTrailer.json();

  return {
    props: {
      ...gameData,
      ...trailer,
    },
  };
};
