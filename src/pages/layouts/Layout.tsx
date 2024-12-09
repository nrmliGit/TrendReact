import HeaderTop from "../../components/layout/HeaderTop";

import Header from "../../components/layout/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Outlet />
    </>
  );
}
