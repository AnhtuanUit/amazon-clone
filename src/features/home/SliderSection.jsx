import IconSprite from "@src/ui/IconSprite";
import { tailwindBgColor } from "@src/utils/helpers";
import { useState } from "react";

import { sliderDataFake } from "@src/data/squareData";
import { Link } from "react-router-dom";

function CustomerItemView() {
  return (
    <>
      {/* <img src={item.image} /> */}
      <img
        className={`h-[100px] w-full ${tailwindBgColor()}`}
        src=""
        alt="Image"
      />
      <span>Link</span>
      <IconSprite name="stars-small-4-5" />
      <span>Amazons Choice/ in Cell</span>
      <span>Blu-ray</span>
      <span>$20.99</span>
      <span>28.98 shipping</span>
    </>
  );
}
function ImageOnly() {
  return (
    <img
      className={`h-[100px] w-full ${tailwindBgColor()}`}
      src=""
      alt="Image"
    />
    // <img src={item.image} />
  );
}

function SellOff() {
  return (
    <>
      {/* <img src={item.image} /> */}
      <img
        className={`h-[100px] w-full ${tailwindBgColor()}`}
        src=""
        alt="Image"
      />
      <div className="flex gap-x-1">
        <span className="bg-me-red-100 px-2 py-1">41% off</span>
        <span className="text-xs text-me-red-100">Limitted time deal</span>
      </div>
      <div className="flex gap-x-1">
        <span>$20.99</span>
        <div>
          <span>List price:</span>
          <span>$39.99</span>
        </div>
      </div>
      <span>Harry Potter and the </span>
    </>
  );
}

function SeeMore() {
  return (
    <div className={`flex ${tailwindBgColor()}`}>
      <span className="font-bold">Title</span> <Link to="#">See more</Link>
    </div>
  );
}

function Pagination() {
  return (
    <div className={`flex justify-between ${tailwindBgColor()}`}>
      <span className="font-bold">Title</span> <span>Page 1of 3</span>
    </div>
  );
}

function SliderSection({ type = "history", headerOption = "default" }) {
  const items = sliderDataFake.items || [
    "/images/heroes/hero1.png",
    "/images/heroes/hero2.png",
    "/images/heroes/hero3.png",
    "/images/heroes/hero4.png",
    "/images/heroes/hero5.png",
    "/images/heroes/hero6.png",
    "/images/heroes/hero1.png",
    "/images/heroes/hero2.png",
    "/images/heroes/hero3.png",
    "/images/heroes/hero4.png",
    "/images/heroes/hero5.png",
    "/images/heroes/hero6.png",
  ];
  const [position] = useState(0);

  const listPositions = [];
  for (let i = -(items.length - 1); i < 2 * items.length; i++) {
    listPositions.push(`translate-x-[${100 * i}%]`);
  }

  return (
    <section className={`px-3 py-2 ${tailwindBgColor()}`}>
      {headerOption === "default" && <span className="font-bold">Title</span>}
      {headerOption === "pagination" && <Pagination />}
      {headerOption === "see-more" && <SeeMore />}
      <div className={`relative w-full ${tailwindBgColor()}`}>
        <div className="relative w-[15%]">
          {items.map((item, i) => {
            const imagePosition = items.length + i - 1 - position;
            return (
              <Link
                href={item.link}
                key={i}
                className={`flex h-auto flex-col ${i > 0 ? "absolute left-0 top-0 pl-3" : ""} w-full duration-1000 ${tailwindBgColor()} ${listPositions[imagePosition]}`}
              >
                {type === "history" && <CustomerItemView item={item} />}
                {type === "image" && <ImageOnly />}
                {type === "sell-off" && <SellOff />}
              </Link>
            );
          })}
        </div>
        <button className="absolute left-0 top-[50%] flex h-[50%] translate-y-[-50%] items-center bg-me-white bg-opacity-50 px-2 py-5">
          <IconSprite name="md-arrow-left" />
        </button>
        <button className="absolute right-0 top-[50%] flex h-[50%] translate-y-[-50%] items-center bg-me-white bg-opacity-50 px-2 py-5">
          <IconSprite name="md-arrow-right" />
        </button>
      </div>
    </section>
  );
}

export default SliderSection;
