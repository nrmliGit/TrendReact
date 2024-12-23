import HeaderTop from "../../components/layout/HeaderTop";

import Header from "../../components/layout/Header";
import { Outlet } from "react-router-dom";
import FavoritiesProvider from "../../providers/contexts/FavoritesContext";
import CartProvider from "../../providers/contexts/CartContext";
import ProductProvider from "../../providers/contexts/ProductContext";

export default function Layout() {
  return (
    <ProductProvider>
      <FavoritiesProvider>
        <CartProvider>
          <HeaderTop />
          <Header />
          <Outlet />
        </CartProvider>
      </FavoritiesProvider>
    </ProductProvider>
  );
}
