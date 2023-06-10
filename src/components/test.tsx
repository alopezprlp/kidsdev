'use client'
import { useRef, useState } from "react";
import cx from "clsx";
// import styles from "./index.module.css";

interface ImageZoomProps {
  imageURL: string;
  zoomImageURL?: string;
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  imageSize?: {
    width: number;
    height: number;
  };
  zoomedImageSize?: {
    width: number;
    height: number;
  };
  isActive?: boolean;
  onZoom?: () => void;
  onClose?: () => void;
}

const ImageZoom: React.FC<ImageZoomProps> = ({
  imageURL,
  zoomImageURL = "",
  placement = "top-right",
  imageSize = { width: 300, height: 300 },
  zoomedImageSize = { width: 600, height: 600 },
  isActive = false,
  onZoom,
  onClose,
}) => {
  const normalImageRef = useRef<HTMLDivElement>(null);
  const zoomedImageRef = useRef<HTMLDivElement>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const normalImageStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: `${imageSize.width}px ${imageSize.height}px`,
    width: `${imageSize.width}px`,
    height: `${imageSize.height}px`,
  };

  const zoomedImageStyle = {
    backgroundImage: `url(${zoomImageURL || imageURL})`,
    backgroundSize: `${zoomedImageSize.width * 1.5}px ${zoomedImageSize.height * 1.5}px`,
    backgroundRepeat: "no-repeat",
    width: `${zoomedImageSize.width}px`,
    height: `${zoomedImageSize.height}px`,
  };

 

  const openZoom = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (zoomedImageRef.current) {
      moveLens(e);
    }

    onZoom && onZoom();
  };

  const closeZoom = () => {
    onClose && onClose();
  };
  const eventType = {
    onMouseMove: openZoom,
    onMouseLeave: closeZoom,
    onTouchMove: openZoom,
    onTouchEnd: closeZoom,
    onTouchCancel: closeZoom,
  };
  const getCursorPos = (e: MouseEvent | TouchEvent) => {
    let x = 0;
    let y = 0;
    const rect = normalImageRef.current?.getBoundingClientRect();

    if (rect) {
      const { pageX, pageY } = e instanceof MouseEvent ? e : e.touches[0];
      x = pageX - rect.left - window.pageXOffset;
      y = pageY - rect.top - window.pageYOffset;
    }

    return { x, y };
  };

  const moveLens = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();

    const viewArea = zoomedImageRef.current;
    const { x, y } = getCursorPos(e);

    setZoomPosition({ x, y });

    if (viewArea) {
      viewArea.style.backgroundPosition = `-${x}px -${y}px`;
    }
  };

  return (
    <>
      <div
        // className={cx(styles.normalImage, {
        //   [zoomOutCursor]: isActive,
        // })}
        style={normalImageStyle}
        ref={normalImageRef}
        {...eventType}
      >
        {isActive && (
          <div
            className={cx('w-12 h-12', placement)}
            style={{
              ...zoomedImageStyle,
              backgroundPosition: `-${zoomPosition.x}px -${zoomPosition.y}px`,
            }}
            ref={zoomedImageRef}
          />
        )}
      </div>
    </>
  );
};

export default ImageZoom;
