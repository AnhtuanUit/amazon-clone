import FlagBase from "./FlagBase";
import Logo from "./Logo";
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
        <span className="text-me-430 text-xs font-medium">{data.more}</span>
      </a>
    </li>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col text-white">
      <button className="cursor-pointer items-center bg-me-darkblue-200 py-4 text-xs hover:bg-me-darkblue-100">
        Back to top
      </button>

      <section className="flex gap-1 border-b border-gray-700 bg-me-darkblue-300 py-10">
        <div className="flex-cols-4 mx-auto  flex w-[1000px] justify-between gap-x-[105px]">
          {Object.keys(section1).map((column, i) => (
            <ColumSection1 key={i} column={column} />
          ))}
        </div>
      </section>

      <section className="bg-me-darkblue-400">
        <div className="mx-auto  flex w-[1000px] items-center justify-center gap-1 py-4">
          <Logo className="py-6" />
          <div className="ml-16 mt-3 flex gap-2 self-start">
            <div className="border-me-gray-250 flex cursor-pointer items-center rounded-sm border">
              <span className="px-2 py-2 text-xs  leading-none">English</span>
            </div>
            <div className="border-me-gray-250 flex cursor-pointer items-center rounded-sm border">
              <span className="px-2 py-2 text-xs  leading-none">
                VND - Vietnamese Dong
              </span>
            </div>
            <div className="border-me-gray-250 flex cursor-pointer items-center rounded-sm border">
              <div className="pl-[8px]">
                <FlagBase iconName="en" />
              </div>
              <span className="px-2 py-2 text-xs  leading-none">
                United States
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-me-darkblue-400">
        <ul className="mx-auto grid w-[1000px] grid-cols-7 gap-x-[46px] gap-y-4  p-2 py-7">
          {section2.map((item, i) => (
            <ItemSection2 key={i} data={item} />
          ))}
        </ul>
      </section>

      <section className="bg-me-darkblue-400">
        <div className="text-me-gray-250 mx-auto flex w-[1000px] flex-col items-center gap-2 py-4">
          <div className="flex items-center justify-center gap-4">
            {section3.map((item, i) => (
              <a href={item.href} key={i} className="text-xs font-medium">
                {item.title}
              </a>
            ))}
          </div>
          <span className="text-xs font-medium">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
