/* eslint-disable react/no-unescaped-entities */
'use client'
import { clsxm } from "@/utils/classes"
import { quickSands } from "@/utils/fonts"
import { useState } from "react"

const Cookies = () => {
  const [hidde,setHidde] = useState(false)
  return (
    <div
    className={clsxm(
      `absolute w-full transition-all duration-500 flex justify-center text-center content-center items-center gap-2 ${quickSands.className} p-4`,
      !hidde ? "h-16" : "h-0 p-0",
      !hidde ? "opacity-100" : "opacity-0",
      !hidde ? "translate-y-[0px]" : "translate-y-[-50px]",
      // !hidde ? "flex" : "hidden",
    )}>
      <p>This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you whisk.</p>
      <span onClick={()=>setHidde(true)} className="bg-black text-white p-2 cursor-pointer transition-all hover:shadow-lg">Accept</span>
    </div>
  )
}

export default Cookies