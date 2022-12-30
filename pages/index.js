import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from '../components/layout'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home({necesaryData}) {




  return (
    <>
     <Layout>
      <Head>
        <title>Games Library</title>
      </Head>
<section className="w-full grid grid-cols-3 gap-4 p-10">
      {necesaryData.map((game) => {
        return (
          <article className='flex flex-col items-center' key={game.id}>
          <Link href={`game/${game.id}`}>
            <Image className='w-64 h-96 object-cover' width={700} height={500} src={game.bgImage} alt="GAME IMAGE"></Image>
            
            <h5 className='w-64 bg-zinc-900 text-center py-4 text-fuchsia-600 font-bold text-lg'>{game.name}</h5>
            </Link>
          </article>
       
        );
      })}
      </section>
      
     </Layout>
    </>
  )
}



export  const getServerSideProps= async ()=> {
  const res=await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_APIKEY}`)
 const games=await res.json()

 const {results}=games
 const necesaryData=results.map(game=>{
  return ({
    name:game.name,
    id:game.id,
    bgImage:game.background_image
  })
 })

 
  return {
    props: {necesaryData}, 
  }
}


