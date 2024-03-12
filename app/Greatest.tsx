
import Image from "next/image"
import Link from "next/link";
type GreatestProps = {
    img:string; 
    title:string; 
    description:string;
    linkText:string;
}
const Greatest = ({img, title, description, linkText}:GreatestProps) => {
  return (
    <div className="relative container ">
        <div className="relative h-96 min-w-[300px]">
        <Image src={img}
        alt="Greatest-img"
        fill
        className='rounded-lg -z-10 object-cover'/>
    </div>
    <div className="absolute top-32 left-12">
        <h3 className="text-[35px] mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <Link href='/' className="text-sm block w-fit px-4 py-2 rounded-lg mt-5 text-white bg-[#1F334E]">
            {linkText}
        </Link>
    </div>
    </div>
  )
}

export default Greatest