import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import SeachInput from '../components/seach-input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Layout>
      <Head>
        <title>Games Library</title>
      </Head>
      
     </Layout>
    </>
  )
}
