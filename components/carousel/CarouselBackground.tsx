import Image from "next/image";
import solarSystem from "@/public/Space.svg";
import stars from "@/public/Stars Animate.svg";
import { RefObject } from "react";

interface BackgroundProps {
  orbitsRef: RefObject<HTMLImageElement>;
  starsRef: RefObject<HTMLImageElement>;
}

const CarouselBackground = ({ orbitsRef, starsRef }: BackgroundProps) => {
  return (
    <>
      <div className="absolute top-[22%] xs:top-[10%] md:top-[7%]  bottom-0 right-0 left-0 sm:-left-3 m-auto w-full md:w-10/12 lg:w-9/12 xl:w-7/12">
        <Image src={solarSystem} alt={""} className="w-full" ref={orbitsRef} />
      </div>
      <div className="absolute w-full flex justify-between top-0 left-0">
        <Image src={stars} alt={""} className="w-full h-full" ref={starsRef} />
      </div>
    </>
  );
};

export default CarouselBackground;
