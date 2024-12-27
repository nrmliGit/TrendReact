import { useState } from "react";
import AsideDashboard from "../../dashboardComponents/AsideDashboard";
import MainDashboard from "../../dashboardComponents/MainDashboard";
import CartProvider from "../../providers/contexts/CartContext";
import FavoritiesProvider from "../../providers/contexts/FavoritesContext";
import ProductProvider from "../../providers/contexts/ProductContext";

export default function Dashboard() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleWidth = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <ProductProvider>
      <CartProvider>
        <FavoritiesProvider>
          <div
            className={`grid h-[100dvh]  ${
              isExpanded ? "grid-cols-[260px_1fr]" : "grid-cols-[80px_1fr]"
            }`}
          >
            <AsideDashboard isExpanded={isExpanded} toggleWidth={toggleWidth} />
            <MainDashboard />
          </div>
        </FavoritiesProvider>
      </CartProvider>
    </ProductProvider>
  );
}
