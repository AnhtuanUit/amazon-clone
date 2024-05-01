import { tailwindBgColor } from "@src/utils/helpers";
import { useMediaQuery } from "react-responsive";

function FourProduct({ data }) {
  return (
    <div className={`grid grid-cols-2 gap-1 p-4 ${tailwindBgColor}`}>
      <span className="col-span-full">{data.title}</span>
      {data.items.map((item, i) => (
        <div key={i} className={`basis-full ${tailwindBgColor()}`}>
          <div className="flex flex-col">
            <img
              className={`h-[100px] w-full ${tailwindBgColor()}`}
              src=""
              alt="Image"
            />
            <span className={tailwindBgColor()}>Title</span>
            <span className={tailwindBgColor()}>1 View</span>
          </div>
        </div>
      ))}
      <a href="#" className={tailwindBgColor()}>
        Link
      </a>
    </div>
  );
}

function OneProject({ data }) {
  return (
    <div className={`flex flex-col p-4 ${tailwindBgColor}`}>
      <span className={tailwindBgColor()}>{data.title}</span>
      <img
        src=""
        alt="Image"
        className={`h-[100px] w-full ${tailwindBgColor()}`}
      />
      <a href="#" className={tailwindBgColor()}>
        Link
      </a>
    </div>
  );
}

function SepecialFourProduct({ data }) {
  return (
    <div className={`grid grid-cols-3 gap-1 p-4 ${tailwindBgColor}`}>
      <span className="col-span-full">{data.title}(SPECIAL)</span>
      {data.items.map((item, i) => {
        const className = i === 0 ? "col-span-full" : "";

        return (
          <div key={i} className={`${tailwindBgColor()} ${className}`}>
            <div className="flex flex-col">
              <img
                className={`h-[100px] w-full ${tailwindBgColor()}`}
                src=""
                alt="Image"
              />
              <span className={tailwindBgColor()}>Title</span>
            </div>
          </div>
        );
      })}
      <a href="#" className={tailwindBgColor()}>
        Link(SPECIAL)
      </a>
    </div>
  );
}

function SquareSection({ data }) {
  const isMaxDesktop = useMediaQuery({ query: `(min-width: 1240px)` });

  const list = isMaxDesktop
    ? data
    : data.slice(0, data.length - (data.length % 3));

  return (
    <section
      className={`desktop:grid-cols-4 grid max-w-[1480px] grid-cols-3 gap-4`}
    >
      {list.map((item, i) => (
        <div key={i} className={`basis-full ${tailwindBgColor()}`}>
          {item.isSpecial ? (
            <SepecialFourProduct data={item} />
          ) : item?.items?.length > 1 ? (
            <FourProduct data={item} />
          ) : (
            <OneProject data={item} />
          )}
        </div>
      ))}
    </section>
  );
}

export default SquareSection;
