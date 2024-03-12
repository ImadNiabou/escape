import { liveItem } from "./types/app"
import Image from "next/image"

type LiveCardProps = liveItem
const LiveCard = ({title, img}: LiveCardProps) => {
  return (
    <div className="cursor-poiner  hover:scale-105 transition-all duration-300 ease-out transform transition-all duration-300 ease-out">
        <div className="relative h-80 w-80" >
           <Image src={img} alt="img" fill className=""/>
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default LiveCard