import { HiOutlineXMark } from "react-icons/hi2";
import { fakeDataCategories } from "@src/data/sideMenuData";
import IconSprite from "./IconSprite";
import { useState } from "react";

function ItemSubCategory({ subCategory, onClick }) {
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(true);
  }

  function handleLeaveHover() {
    setIsHover(false);
  }
  return (
    <li
      className="cursor-pointer pl-9 pr-5 hover:bg-me-gray-100"
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeaveHover}
    >
      <div className="flex items-center justify-between py-2.5 text-sm">
        <div className="flex items-center gap-x-1.5">
          {subCategory.icon && (
            <div className="w-6">
              <IconSprite name={subCategory.icon} className="mb-[1px]" />
            </div>
          )}
          <span>{subCategory.title}</span>
        </div>
        {subCategory?.items?.length ? (
          <IconSprite
            name={isHover ? "2x-arrow-right-black" : "2x-arrow-right"}
            className="hover:"
          />
        ) : (
          false
        )}
      </div>
    </li>
  );
}

function ItemCategory({ item, onChangeCategory }) {
  return (
    <div className="flex w-full flex-col">
      <span className="px-9 py-2.5 text-lg font-bold">{item.title}</span>

      <ListSubCategory
        list={item.items}
        render={(subCategory, i) => (
          <ItemSubCategory
            key={i}
            subCategory={subCategory}
            onClick={() => {
              onChangeCategory && onChangeCategory(subCategory);
            }}
          />
        )}
      />
    </div>
  );
}

function ListSubCategory({ list, render }) {
  if (!list || !list.length) return;
  return <ul className="flex flex-col">{list.map(render)}</ul>;
}

function ListCategory({ list, render, className }) {
  if (!list || !list.length) return;
  return (
    <div className={`mt-2 flex w-full flex-col overflow-y-scroll ${className}`}>
      {list.map(render)}
    </div>
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

function BackMainMenuButton({ backToCategory }) {
  return (
    <div className="mt-2 text-sm font-bold uppercase">
      <div
        className="flex items-center gap-2 px-9 py-3 hover:bg-me-gray-100"
        onClick={backToCategory}
      >
        <IconSprite name="2x-arrow-left" />
        <span>Main Menu</span>
      </div>
      <div className="border-t-[1px] border-me-gray-200" />
    </div>
  );
}

function SideMenu({ isOpen, onCloseMenu }) {
  const [currSubCategory, setCurrentCategory] = useState(null);

  const isOpenCategory = !!currSubCategory;

  function handleChangeCategory(subCategory) {
    console.log("currSubCategory", subCategory);
    setCurrentCategory(subCategory || null);
  }

  function backToCategory() {
    setCurrentCategory(null);
  }

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
        <div className="mb-20 flex h-full w-full flex-col items-start overflow-hidden">
          <SideProfile />
          <div
            className={`flex w-[200%] ${isOpenCategory ? "translate-x-[-50%]" : "translate-x-0"} overflow-hidden duration-500`}
          >
            <ListCategory
              list={fakeDataCategories}
              render={(item, i) => (
                <div key={i}>
                  <ItemCategory
                    item={item}
                    onChangeCategory={handleChangeCategory}
                  />
                  {fakeDataCategories?.length - 1 > i && (
                    <div className="my-2.5 border-t-[1px] border-me-gray-200" />
                  )}
                </div>
              )}
            />
            <div className="flex w-full flex-col overflow-y-scroll">
              <BackMainMenuButton backToCategory={backToCategory} />
              <ListCategory
                className="mt-0 [overflow:unset]"
                list={currSubCategory?.items}
                render={(item, i) => (
                  <div key={i}>
                    <ItemCategory item={item} />
                    {currSubCategory?.items.length - 1 > i && (
                      <div className="my-2.5 border-t-[1px] border-me-gray-200" />
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          {/* <TemparateRoutes onCloseMenu={onCloseMenu} /> */}
        </div>
      </aside>
    </>
  );
}

export default SideMenu;
