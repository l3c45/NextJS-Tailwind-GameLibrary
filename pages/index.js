import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/layout'



const inter = Inter({ subsets: ['latin'] })

export default function Home({results}) {


  return (
    <>
     <Layout>
      <Head>
        <title>Games Library</title>
      </Head>

      {results.map((game) => {
        return (
          <article className='flex flex-col items-center' key={game.id}>
            <Image className='w-64 h-96 object-cover' width={700} height={500} src={game.background_image} alt="GAME IMAGE"></Image>
            <h5 className='w-64 bg-zinc-900 text-center py-4 text-fuchsia-600 font-bold text-lg'>{game.name}</h5>
          </article>
        );
      })}
      
     </Layout>
    </>
  )
}



export  const getServerSideProps= async ()=> {
  const res=await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_APIKEY}`)
 const games=await res.json()
 const {results}=games
  return {
    props: {results}, 
  }
}


