import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../public/logo.png";
import SeachInput from "./seach-input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Layout = ({ children }) => {
const [search, setSearch] = useState(false)

  return (
    <div className="bg-[#4a0339] flex items-center flex-col justify-between h-full min-h-screen ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header className="bg-zinc-900 relative w-full px-6 flex items-center justify-center h-24 ">
        <Link className=" absolute left-4 " href={"/"}>
        <Image  src={logo} alt={"logo"} width={"100"}></Image>
        </Link>
     <h1 className="text-3xl text-fuchsia-600  text-center ">The Game Library</h1>

{
  !search?
  <MagnifyingGlassIcon
onClick={()=>setSearch(!search)}
   className="h-6 w-6 text-fuchsia-600 absolute right-6 "/>
  :
  <SeachInput  ></SeachInput>
}

      </header>
      <main className="w-screen" >{children}</main>
      <footer className="w-full bg-zinc-900 text-center h-16 flex items-center justify-center" >
      <p className="text-xl text-fuchsia-600">l3c45</p>
      </footer>
    </div>
  );
};

export default Layout;

