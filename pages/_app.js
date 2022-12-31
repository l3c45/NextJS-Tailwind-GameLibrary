import '../styles/globals.css'
import Router from 'next/router'
import { useState, useEffect } from 'react';
import Loader from '../components/loader';


export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });
    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });
  
    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });
  
  }, [Router])
  
  return (
  <>
  {isLoading && <Loader/>}
  <Component {...pageProps} />
  </>)
}
