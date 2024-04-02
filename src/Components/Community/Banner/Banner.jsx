import React from 'react'
import community from "../../../../public/Images/community-bg.png"
import Image from 'next/image'
const Banner = () => {
  return (
    <div className=''>
        <div className='overlay'>
            <Image src={community} alt='community-bg' className='h-full w-full' />
        </div>
        <div  className=' absolute z-[4] top-[0] left-[50%] flex translate-x-[-50%] translate-y-[150%] flex-col items-center gap-6'>
            <h1 className='text-white Sans font-bold text-[3vw]'>Join Q&A Network!</h1>
            <p className='text-white font-semibold text-[1.3vw] text-center'>{`Login to our social questions & Answers Engine to ask questions answer people's questions & connect with other people.`}</p>
            <button className='btn px-4 montserrat font-medium text-[1.3vw] bg-white text-black'>Ask A Question</button>
        </div>
    </div>
  )
}

export default Banner