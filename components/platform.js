import w from "../public/platforms/w.png"
import ns from "../public/platforms/ns.png"
import ps3 from "../public/platforms/ps3.png"
import ps4 from "../public/platforms/ps4.png"
import ps5 from "../public/platforms/ps5.png"
import xbs from "../public/platforms/xbs.png"
import x360 from "../public/platforms/x360.png"
import xbo from "../public/platforms/xbo.png"
import Image from "next/image"
//TODO: 6 ,5,3,21,19
const logo={
    1:xbo,
    2:xbo,
    3:xbo,
    4:w,
    6:w,
    5:w,
    7:ns,
    14:x360,
    16:ps3,
    18:ps4,
    19:ps4,
    21:w,
    186:xbs,
    187:ps5,

    
}





const Platform = ({name,date,id}) => {
    
console.log(name,id)
  return (
    <div
    className="rounded p-2 bg-zinc-700 w-32 h-48 my-2 flex flex-col justify-evenly"
  >
  <Image src={logo[id]} width={"auto"} height={100} alt={"platform logo"} ></Image>
    <h4 className="text-center">{name}</h4>
    <p className="text-center">{date}</p>
  </div>
  )
}

export default Platform