import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>

      <aside>
        <span>Sidebar Menu</span>
      </aside>
      <Outlet />
      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  );
}

export default AppLayout;
