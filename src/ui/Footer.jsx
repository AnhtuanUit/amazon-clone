import FlagBase from "./FlagBase";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="flex flex-col text-white">
      <button className="hover:bg-me-darkblue-100 bg-me-darkblue-200 cursor-pointer items-center py-4 text-xs">
        Back to top
      </button>
      <div className="bg-me-darkblue-300  flex gap-1 border-b border-gray-700 py-10">
        <div className="flex-cols-4 mx-auto  flex w-[1000px] justify-between">
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <span className="font-bold">Get to Know Us</span>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                About Amazon
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Amazon Devices
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Amazon Science
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <span className="font-bold">Make Money with Us</span>
            </li>

            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Sell products on Amazon
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Sell on Amazon Business
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Sell apps on Amazon
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Advertise Your Products
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Self-Publish with Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Host an Amazon Hub
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                See More Make Money with Us
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <span className="font-bold">Amazon Payment Products</span>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Amazon Business Card
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Shop with Points
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Reload Your Balance
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Amazon Currency Converter
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <span href="#" className="font-bold">
                Let Us Help You
              </span>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Amazon and COVID-19
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Your Account
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Your Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Shipping Rates & Policies
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Returns & Replacements
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Manage Your Content and Devices
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Amazon Assistant
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-[#ddd]">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-me-darkblue-400">
        <div className="mx-auto  flex w-[1000px] items-center justify-center gap-1 py-4">
          <Logo className="py-6" />
          <div className="ml-16 mt-3 flex gap-2 self-start">
            <div className="flex cursor-pointer items-center rounded-sm border border-[#ddd]">
              <span className="px-2 py-2 text-xs  leading-none">English</span>
            </div>
            <div className="flex cursor-pointer items-center rounded-sm border border-[#ddd]">
              <span className="px-2 py-2 text-xs  leading-none">
                VND - Vietnamese Dong
              </span>
            </div>
            <div className="flex cursor-pointer items-center rounded-sm border border-[#ddd]">
              <div className="pl-[8px]">
                <FlagBase iconName="en" />
              </div>
              <span className="px-2 py-2 text-xs  leading-none">
                United States
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-me-darkblue-400">
        <ul className="mx-auto grid w-[1000px] grid-cols-7 gap-y-4  p-2 py-7">
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li />
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex flex-col">
              <strong className="text-xs font-medium">Amazon Music</strong>
              <span className="text-xs font-medium text-[#999]">
                Stream millions of songs
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-me-darkblue-400">
        <div className="text-[#ddd mx-auto flex w-[1000px] flex-col items-center gap-2 py-4">
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="text-xs font-medium">
              Conditions of Use
            </a>
            <a href="#" className="text-xs font-medium">
              Privacy Notice
            </a>
            <a href="#" className="text-xs font-medium">
              Consumer Health Data Privacy Disclosure
            </a>
            <a href="#" className="text-xs font-medium">
              Your Ads Privacy Choices
            </a>
          </div>
          <span className="text-xs font-medium">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
