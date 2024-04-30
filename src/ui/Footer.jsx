import IconSprite from "./IconSprite";
import { section1, section2, section3 } from "@src/data/footerData";

function ItemSection1({ data }) {
  return (
    <li className={data.textWrap ? "text-wrap" : "text-nowrap"}>
      <a
        href={data.href}
        className="text-me-gray-250 inline-block text-sm leading-4 hover:underline"
      >
        {data.text}
      </a>
    </li>
  );
}

function ColumSection1({ column }) {
  return (
    <div key={column}>
      <div className="text-nowrap px-2 text-base font-bold">{column}</div>
      <ul className="flex flex-1 flex-col gap-1 p-2">
        {section1[column].map((data, i) => (
          <ItemSection1 key={i} data={data} />
        ))}
      </ul>
    </div>
  );
}

function ItemSection2({ data }) {
  return (
    <li className={data.className}>
      <a href={data.href} className="flex flex-col hover:underline">
        <strong className="text-xs font-medium">{data.title}</strong>
        <span className="text-me-gray-430 text-xs font-medium">
          {data.more}
        </span>
      </a>
    </li>
  );
}

function ButtonSection2({ iconLeft, currency, text, upDownArrow = false }) {
  return (
    <div className="border-me-gray-430 flex cursor-pointer items-center gap-x-1 rounded-sm border px-2 py-1">
      <div className="flex items-center gap-x-1">
        {iconLeft && <IconSprite name={iconLeft} />}
        {currency && <span>{currency}</span>}
        {text && <span className="pr-3 text-xs leading-none">{text}</span>}
      </div>

      {upDownArrow && <IconSprite name="flag-up-down-arrow" />}
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col text-white">
      <button className="cursor-pointer items-center bg-me-darkblue-200 py-4 text-xs hover:bg-me-darkblue-100">
        Back to top
      </button>

      <section className="flex gap-1 border-b border-gray-700 bg-me-darkblue-300 px-2 py-10">
        <div className="flex-cols-4 mx-auto  flex w-[1000px] justify-between gap-x-[105px]">
          {Object.keys(section1).map((column, i) => (
            <ColumSection1 key={i} column={column} />
          ))}
        </div>
      </section>

      <section className="bg-me-darkblue-300">
        <div className="mx-auto  my-5 flex w-[1000px] items-center justify-center gap-2">
          <IconSprite name="1x-logo" className="mb-5 mt-7" />
          <div className="ml-16 mt-3 flex gap-2 self-start">
            <ButtonSection2
              iconLeft="flag-globe"
              text="English"
              upDownArrow={true}
            />
            <ButtonSection2 currency="₫" text="VND - Vietnamese Dong" />
            <ButtonSection2 iconLeft="flag-en" text="United States" />
          </div>
        </div>
      </section>

      <section className="bg-me-darkblue-400 px-2">
        <ul className="mx-auto grid w-[1000px] grid-cols-7 gap-x-[46px] gap-y-4  p-2 py-7">
          {section2.map((item, i) => (
            <ItemSection2 key={i} data={item} />
          ))}
        </ul>
      </section>

      <section className="bg-me-darkblue-400">
        <div className="text-me-gray-250 mx-auto flex w-[1000px] flex-col items-center gap-2 py-4">
          <ul className="flex items-center justify-center gap-4">
            {section3.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="text-xs font-medium hover:underline"
                >
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <IconSprite name="1x-ads-privacy" />
            </li>
          </ul>
          <span className="text-xs font-medium">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
