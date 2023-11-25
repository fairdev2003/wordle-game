import React, {useState} from 'react'
import { TbSword } from "react-icons/tb";
import Us from '../assets/usa.jpg'
import Poland from '../assets/poland.png'
import { HiChevronDown } from "react-icons/hi";

export default function Navbar() {
  const [dropdownopen, setdropdown]: any = useState(false)


  return (
    <div className='flex items-center justify-between p-[20px] h-[65px] w-full font-[Poppins] sticky top-0'>
        <p className='text-[black] font-[800] items-center flex gap-x-5'><TbSword size={40}/>Word Game</p>
        <div className='bg-[#dad8d8] w-[110px] h-[40px] rounded-full flex items-center p-4 justify-between'>
            <img className='w-[40px] h-[20px] rounded-md' alt='country' src={Poland}></img>
            <HiChevronDown className='cursor-pointer' onClick={() => {setdropdown(!dropdownopen)}} size={30}/>
            <div className={`${dropdownopen ? "fixed" : "hidden"} top-[60px] right-6 w-[150px] h-[auto] bg-[#dad8d8] rounded-lg p-2 z-1 flex-col`}>
                <div className='w-[50px] h-[30px] rounded-md flex items-center gap-3 font-[700]'>
                    <img src={Poland} alt='Poland'/>
                    <p>Poland</p>
                </div>
                <div className='w-[50px] h-[30px] rounded-md flex items-center gap-3 font-[700] mt-2'>
                    <img src={Us} alt='Usa'/>
                    <p>English</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}
