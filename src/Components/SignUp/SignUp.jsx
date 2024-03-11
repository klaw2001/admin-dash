import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa6'

const SignUp = () => {
  return (
    <div className="py-6 md:py-10 px-4 md:px-16">
      <div className="login  p-4  flex flex-col items-center gap-4">
        <div>
          <h1 className="Sans my-2 md:my-5 text-black text-[7vw]  md:text-[4.5vw] font-bold md:leading-[4.8vw] lg:leading-[3.2vw] lg:text-[3vw]">
            Signup to Dialable
          </h1>

          <p className="montserrat text-[3.5vw] md:text-[2vw] lg:text-[1.05vw] text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <form
          action=""
          className="flex pt-4 py-8 w-full md:w-[50%] lg:w-[30%] border-b-2 border-black flex-col gap-4"
        >
          <div className="inputCont">
            <input
              type="text"
              className="input p-3 w-full border border-black rounded-none"
              id="email"
              required={true}
            />
            <label className="label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="inputCont">
            <input
              type="password"
              className="input p-3 w-full border border-black rounded-none"
              id="password"
              required={true}
            />
            <label className="label" htmlFor="password">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="p-2 lg:py-3 lg:px-4 bg-[#781393] w-full  text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className="w-full flex flex-col items-center justify-center">
          <button className="p-2 lg:py-3 lg:px-4 flex gap-2 border-2 w-full md:w-[50%] lg:w-[30%]  text-black my-2 items-center justify-center  font-semibold">
            <FaGoogle />
            Sign Up with Google
          </button>
          <button className="p-2 lg:py-3 lg:px-4 flex gap-2 border-2 w-full md:w-[50%] lg:w-[30%]  text-black my-2 items-center justify-center  font-semibold">
            <FaFacebook />
            Sign Up with Facebook
          </button>
        </div>
    
        <p className=" my-2 block text-black">{`Already have an account?`} <Link href={"#"} className="underline">Log in</Link></p>

      </div>
    </div>
  )
}

export default SignUp