import { HiOutlineXMark } from "react-icons/hi2";
import { fakeDataCategories } from "@src/data/sideMenuData";
import IconSprite from "./IconSprite";

function ItemSubCategory({ subCategory }) {
  return (
    <li className="cursor-pointer px-9 hover:bg-me-gray-200">
      <div className="flex justify-between py-3 text-sm">
        <span>{subCategory.title}</span>
        {subCategory.items.length && <IconSprite name="2x-arrow-right" />}
      </div>
    </li>
  );
}

function ItemCategory({ category }) {
  return (
    <div className="m-1 w-full py-2.5">
      <span className="px-9 text-lg font-bold">{category.title}</span>

      <ListSubCategory
        subCategories={category.items}
        render={(subCategory, i) => (
          <ItemSubCategory key={i} subCategory={subCategory} />
        )}
      />
    </div>
  );
}

function ListSubCategory({ subCategories = [], render }) {
  return <ul className="flex flex-col">{subCategories.map(render)}</ul>;
}

function ListCategory({ categories, render }) {
  return (
    <div className="w-full overflow-y-scroll">{categories.map(render)}</div>
  );
}

function SideProfile() {
  return (
    <div className="text-bold flex w-full gap-x-3 bg-me-darkblue-300 px-9 py-2.5 text-lg font-bold text-me-white">
      <IconSprite name="2x-profile" />
      <span>Hello, Tuan</span>
    </div>
  );
}

function SideMenu({ isOpen, onCloseMenu }) {
  return (
    <>
      <div
        onClick={onCloseMenu}
        className={`fixed h-full w-full bg-[#000000b3] ${isOpen ? "visible opacity-100" : "invisible opacity-0"} duration-500`}
      >
        <div className="ml-3 mt-3">
          <HiOutlineXMark className="ml-80 h-8 w-40 text-white" />
        </div>
      </div>

      <aside
        className={`fixed flex h-full w-96 ${isOpen ? "translate-x-0" : "translate-x-[-100%]"} items-center bg-white duration-500`}
      >
        <div className="flex h-full w-full flex-col items-start">
          <SideProfile />
          <ListCategory
            categories={fakeDataCategories}
            render={(category, i) => (
              <ItemCategory key={i} category={category} />
            )}
          />
          {/* <TemparateRoutes onCloseMenu={onCloseMenu} /> */}
        </div>
      </aside>
    </>
  );
}

export default SideMenu;
