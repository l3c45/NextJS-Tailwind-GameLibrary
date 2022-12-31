import { useState } from 'react'

const SeachInput = () => {
  const [input, setInput] = useState("")

  const handlechangue=(e)=>{
   setInput( e.target.value)
  }

  const sumbitForm=(e)=>{
    e.preventDefault()
    console.log("envio" , input)
 setInput("")
   }

  return (
    <form onSubmit={(e)=>sumbitForm(e)} className="absolute right-6  ">
    <input onChange={(e)=>handlechangue(e)} value={input} placeholder={"Search a game ..."} className=' h-8 rounded-xl text-right focus:outline-none px-2 placeholder:text-gray-500 italic'/>
   
  </form>
  )
}

export default SeachInput