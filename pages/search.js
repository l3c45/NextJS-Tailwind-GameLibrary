import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"

export  const getServerSideProps= async (context)=> {
    const { query}= context
    console.log(context)

    const res=await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_APIKEY}&search=${query.game}`)
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



const search = ({necesaryData}) => {
  console.log(necesaryData)

  return (
    <Layout>
      <Head>
        <title>Search Result</title>
      </Head>
<section className="w-full grid grid-cols-2  gap-1 md:grid-cols-4 md:gap-4 md:p-10 p-2">
      {necesaryData.map((game) => {
        console.log(game.bgImage)
        return (
          <article className='flex flex-col items-center my-2' key={game.id}>
          <Link href={`game/${game.id}`}>
            <Image className='w-40 h-64 md:w-64 md:h-96 object-cover ' width={700} height={500} src={game?.bgImage || "https://media.rawg.io/media/screenshots/6cc/6ccd8c0140f633bbf145d2fb64098307_zKScf16.jpg"} alt="GAME IMAGE"></Image>
            
            <h5 className=' w-40 md:w-64 bg-zinc-900 text-center py-4 text-fuchsia-600 font-bold text-lg'>{game.name}</h5>
            </Link>
          </article>
       
        );
      })}
      </section>
      
     </Layout>
  )
}

export default search