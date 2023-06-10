"use client";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { francois, quickSands } from "@/utils/fonts";
import Rate from "@/components/RateStart";

const ReviewsSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={false}
      autoplay={{
        delay: 3000,
      }}
      modules={[Pagination, Autoplay]}
      className="w-full h-full"
    >
      <SwiperSlide>
        <div className="mt-5 border-dashed border border-gray-400 p-4">
          <div className="flex items-center mb-4">
            <div className="">
              <Image
                src="/images/seller/for-home-15-300x300.jpg"
                alt="Imagen"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="ml-4">
              <div className="flex space-x-2 mb-2">
                <h2
                  className={`uppercase text-sm font-bold text-[#486683] ${quickSands.className}`}
                >
                  Alex R. 
                </h2>
                <span
                  className={`text-sm text-[#486683] ${quickSands.className}`}
                >
                  5 December, 2022
                </span>
              </div>
              <Rate rate={3} />

              <p
                className={`mt-2 mb-2 uppercase text-sm font-bld text-[#486683] ${quickSands.className}`}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                iusto autem, eligendi, quisquam nemo quod voluptate architecto
                facilis voluptatem ratione perferendis pariatur earum sequi, vel
                provident? Ratione minima unde maxime.
              </p>
              <p
                className={`mt-2 uppercase text-sm font-bld text-[#486683] ${francois.className}`}
              >
                Rated 3 out of 5
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mt-5 border-dashed border border-gray-400 p-4">
          <div className="flex items-center mb-4">
            <div className="">
              <Image
                src="/images/seller/boys-3-1-300x300.jpg"
                alt="Imagen"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
            <div className="ml-4">
              <div className="flex space-x-2 mb-2">
                <h2
                  className={`uppercase text-sm font-bold text-[#486683] ${quickSands.className}`}
                >
                  Julia Perez
                </h2>
                <span
                  className={`text-sm text-[#486683] ${quickSands.className}`}
                >
                  12 March, 2023
                </span>
              </div>
              <Rate rate={5} />

              <p
                className={`mt-2 mb-2 uppercase text-sm font-bld text-[#486683] ${quickSands.className}`}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                iusto autem, eligendi, quisquam nemo quod voluptate architecto
                facilis voluptatem ratione perferendis pariatur earum sequi, vel
                provident? Ratione minima unde maxime.
              </p>
              <p
                className={`mt-2 uppercase text-sm font-bld text-[#486683] ${francois.className}`}
              >
                Rated 5 out of 5
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewsSlider;
