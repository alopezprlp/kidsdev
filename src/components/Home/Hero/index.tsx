import Image from "next/image";
import SwiperTop from "./SwiperTop";
import GirlImg from "../../../../public/images/main/girls-power.webp";
import { francois, quickSands } from "@/utils/fonts";
const Hero = () => {
  return (
    <section className="grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <SwiperTop />
      </div>
      <div className="col-span-1">
        <div className="w-full flex flex-col items-center ">
          <div className="w-full h-auto">
            <Image src={GirlImg} alt="Girls" className="h-full w-full object-cover" />
          </div>
          <h1 className={`tracking-wide text-[#486683] uppercase text-2xl font-bold mt-3 ${francois.className}`}>Girl Power</h1>
          <p className={`mt-2 ${quickSands.className} text-[#486683]`}>For a colorful summer</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
