import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header onOpenMenu={openMenu} />
      <SideMenu isOpen={isOpen} onCloseMenu={closeMenu} />
      <div className="relative w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
