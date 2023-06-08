"use client";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { francois, quickSands } from "@/utils/fonts";

const SwiperTop = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={false}
      autoplay={{
        delay: 4500,
      }}
      modules={[Pagination, Autoplay]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="relative w-full h-[30rem] ">
          <div className="absolute inset-0">
            <Image
              src="/images/sliders/slider-1.webp"
              alt="background image"
              fill
            />
          </div>
          <div className="relative z-10 flex flex-col items-start justify-end h-full p-6">
            <h1
              className={`text-5xl tracking-wide text-white uppercase ${francois.className}`}
            >
              JUMPSUITS
            </h1>
            <p className={`mt-2 text-sm text-white ${quickSands.className}`}>
              Confortables clothes for your little babies
            </p>
            <button className="transition-all mt-4 py-[14px] px-2 bg-white text-[#486683] hover:text-[#E5745D]">
              <span
                className={`${francois.className} border-dashed border-2 px-[18px] py-[8px]  border-[#486683] uppercase `}
              >
                DISCOVER
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full h-[30rem] ">
          <div className="absolute inset-0">
            <Image
              src="/images/sliders/slider-1.webp"
              alt="background image"
              fill
            />
          </div>
          <div className="relative z-10 flex flex-col items-start justify-end h-full p-6">
            <h1
              className={`text-5xl tracking-wide text-white uppercase ${francois.className}`}
            >
              JUMPSUITS
            </h1>
            <p className={`mt-2 text-sm text-white ${quickSands.className}`}>
              Confortables clothes for your little babies
            </p>
            <button className="transition-all mt-4 py-[14px] px-2 bg-white text-[#486683] hover:text-[#E5745D]">
              <span
                className={`${francois.className} border-dashed border-2 px-[18px] py-[8px]  border-[#486683] uppercase `}
              >
                DISCOVER
              </span>
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperTop;
