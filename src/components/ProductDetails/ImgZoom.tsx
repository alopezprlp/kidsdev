"use client";
import Image from "next/image";
import { FC, useRef, useState } from "react";

interface IZoom {
  images: string[];
}

const defaultImages = [
  "/images/main/girls-2-2-580x870.jpg",
  "/images/main/girls-2-3-580x870.jpg",
  "/images/main/girls-3-1-580x870.jpg",
  "/images/main/girls-3-2-580x870.jpg",
];

const ImgZoom: FC<IZoom> = ({ images }) => {
  console.log("currente arrivals iamages",images)
  const normalImageRef = useRef<any>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomedH, zoomedW] = useState({ w: 400, h: 400 });
  const [hovered, setHovered] = useState(false);
  const [relatedImages] = useState(images || defaultImages);
  const [currentImage, setCurrentImage] = useState(relatedImages[0]);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const getCursorPos = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = normalImageRef.current?.getBoundingClientRect();

    if (!rect) {
      return setZoomPosition({
        x: 0,
        y: 0,
      });
    }

    zoomedW({ w: rect.height, h: rect.height });

    const { pageX, pageY } = e;
    const x = pageX - rect.left - window.pageXOffset;
    const y = pageY - rect.top - window.pageYOffset;
    const zoomX = (x / rect.width / 2) * zoomedH.w;
    const zoomY = (y / rect.height / 2) * zoomedH.h;
    setZoomPosition({
      x: zoomX,
      y: zoomY,
    });
  };
  return (
    <div className="w-full">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row relative h-[30rem]">
          <Image
            src={currentImage}
            width={500}
            height={500}
            alt="img"
            className="transition-all duration-500"
            ref={normalImageRef}
            onMouseMove={(e) => getCursorPos(e)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              width: "100%",
              height: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              objectFit: "contain",
            }}
            priority
          />
          <div
            className="w-full h-full absolute right-[-100%] transition-all duration-500"
            style={{
              opacity: hovered ? "1" : "0",
              zIndex: hovered ? "10" : "-10",
            }}
          >
            <div
              style={{
                backgroundSize: `${zoomedH.w * 1.2}px ${zoomedH.h * 1.5}px`,
                backgroundImage: `url(${currentImage})`,
                width: `100%`,
                height: `100%`,
                backgroundRepeat: "no-repeat",
                position: "absolute",
                pointerEvents: "none",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundPosition: `-${zoomPosition.x}px -${zoomPosition.y}px`,
              }}
            />
          </div>
        </div>
        <div className="flex justify-stretch gap-3 mt-3">
          {relatedImages.slice(0, 4).map((e, inx) => (
            <Image
              className="cursor-pointer"
              onClick={() => setCurrentImage(e)}
              key={inx}
              src={e}
              width={70}
              height={70}
              alt="start"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgZoom;
