'use client'
import  { useState } from "react";


interface ImageZoomProps {
  imageUrl: string;
  zoomedImageUrl: string;
  zoomedWidth: number;
  zoomedHeight: number;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  imageUrl,
  zoomedImageUrl,
  zoomedWidth,
  zoomedHeight,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsZoomed(true);
    updateZoomPosition(e);
  };

  const handleZoomOut = () => {
    setIsZoomed(false);
  };

  const updateZoomPosition = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const x = Math.floor((offsetX / width) * zoomedWidth);
    const y = Math.floor((offsetY / height) * zoomedHeight);

    setZoomPosition({ x, y });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={imageUrl}
        alt="Image"
        onMouseMove={updateZoomPosition}
        onMouseEnter={handleZoomIn}
        onMouseLeave={handleZoomOut}
        style={{ flex: 1 }}
      />

      {isZoomed && (
        <div
          style={{
            backgroundImage: `url(${zoomedImageUrl})`,
            backgroundPosition: `-${zoomPosition.x}px -${zoomPosition.y}px`,
            backgroundRepeat: "no-repeat",
            width: `${zoomedWidth}px`,
            height: `${zoomedHeight}px`,
            marginLeft: "10px",
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
