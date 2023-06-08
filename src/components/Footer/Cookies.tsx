import { quickSands } from "@/utils/fonts"

const Cookies = () => {
  return (
    <div className={`flex justify-center text-center content-center items-center gap-2 ${quickSands.className} p-4`}>
      <p>This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you whisk.</p>
      <span className="bg-black text-white p-2 cursor-pointer transition-all hover:shadow-lg">Accept</span>
    </div>
  )
}

export default Cookies