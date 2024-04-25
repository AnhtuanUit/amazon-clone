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
    <div className="grid grid-cols-1">
      <Header onOpenMenu={openMenu} />
      <SideMenu isOpen={isOpen} onCloseMenu={closeMenu} />
      <div className="h-96">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
