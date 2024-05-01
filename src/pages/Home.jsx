import SliderSection from "@src/features/home/SliderSection";
import SquareSection from "@src/features/home/SquareSection";
import Slider from "@src/ui/Slider";
import { fakeSquareData } from "@src/data/squareData";

function Homepage() {
  return (
    <>
      <div className="absolute left-[50%] w-full max-w-[1500px] translate-x-[-50%]">
        <Slider />
      </div>
      <div className="relative mx-auto mb-5 w-full max-w-[1500px]">
        <div className="mt-80 flex flex-col gap-y-5 px-4">
          <SquareSection data={fakeSquareData} />
          <SliderSection type="sell-off" headerOption="see-more" />
          <SliderSection type="image" />
          <SliderSection type="image" />
          <SquareSection
            data={fakeSquareData
              .filter((item) => item.items.length === 4)
              .slice(0, 4)}
          />
          <SliderSection type="image" />
          <SliderSection type="sell-off" headerOption="see-more" />
          <SquareSection
            data={fakeSquareData
              .filter((item) => item.items.length === 4)
              .slice(0, 4)}
          />
          <SliderSection type="image" />
          <SliderSection type="image" />
        </div>
      </div>
      <div className="flex w-full flex-col py-5">
        <SliderSection type="history" headerOption="pagination" />
        <SliderSection type="image" headerOption="see-more" />
      </div>
    </>
  );
}

export default Homepage;
