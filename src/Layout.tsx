import { Outlet } from "react-router";
import { Footer } from "./components/Footer";
import { NavMenu } from "./components/NavMenu";

export default function Layout() {
  return (
    <div className="container flex flex-col mx-auto w-full h-full min-h-[100vh]">
      <NavMenu />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
