import { tailwindBgColor } from "@src/utils/helpers";
import { useEffect, useState } from "react";
import IconSprite from "./IconSprite";

function Slider({ className }) {
  const images = [
    "/images/heroes/hero1.png",
    "/images/heroes/hero2.png",
    "/images/heroes/hero3.png",
    "/images/heroes/hero4.png",
    "/images/heroes/hero5.png",
    "/images/heroes/hero6.png",
  ];
  const [position, setPosition] = useState(0);

  // A visual of ideals
  // We need use loop for generate it later
  const listPositions = [
    `translate-x-[-500%]`,
    `translate-x-[-400%]`,
    `translate-x-[-300%]`,
    `translate-x-[-200%]`,
    `translate-x-[-100%]`,
    "translate-x-0",
    `translate-x-[100%]`,
    `translate-x-[200%]`,
    `translate-x-[300%]`,
    `translate-x-[400%]`,
    `translate-x-[500%]`,
  ];

  useEffect(
    function () {
      let interval = setInterval(function () {
        setPosition(() => {
          return position + 1 >= images.length ? 0 : position + 1;
        });
      }, 5000);

      return () => {
        clearInterval(interval); // Cleanup: Clear the interval
      };
    },
    [position, images.length, setPosition],
  );

  return (
    <div
      className={`relative w-full overflow-hidden ${tailwindBgColor()} ${className}`}
    >
      {images.map((imgSrc, i) => {
        const imagePosition = images.length + i - 1 - position;
        return (
          <img
            key={i}
            src={imgSrc}
            className={`h-auto ${i > 0 ? "absolute left-0 top-0" : ""} w-full duration-1000 ${tailwindBgColor()} ${listPositions[imagePosition]}`}
          />
        );
      })}
      <button className="absolute left-5 top-0 flex h-[50%] items-center rounded border-me-white hover:border-2">
        <IconSprite name="3x-arrow-left" />
      </button>
      <button className="absolute right-5 top-0 flex h-[50%] items-center rounded border-me-white hover:border-2">
        <IconSprite name="3x-arrow-right" />
      </button>
    </div>
  );
}

export default Slider;
