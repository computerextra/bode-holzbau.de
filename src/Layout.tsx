import { Outlet } from "react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
