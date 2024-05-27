import Image from "next/image";
import kebab from "../../../public/icons/kebab.svg"


const Kebab = () => {
  return (
    <button>
    <Image src={kebab} alt='kebab' width={40} height={40}/>
    </button>
  )
}

export default Kebab;