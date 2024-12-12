import { createContext, PropsWithChildren, useContext, useState } from "react";

export type CartItem = {
  productId: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

type CartState = {
  cart: Array<CartItem>;
  toggle?: (cartItem: CartItem) => void;
};

const CartContext = createContext<CartState>({
  cart: [],
});

export const useCart = () => useContext(CartContext);
export default function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartState["cart"]>([]);

  const toggleCartItem = (cartItem: CartItem) => {
    setCart((state) => {
      const foundIndex = state.findIndex(
        (item) => item.productId === cartItem.productId
      );
      if (foundIndex < 0) return [...state, cartItem];
      else if (foundIndex >= 0)
        return state.filter(
          (item) => item.productId !== state[foundIndex].productId
        );

      return state;
    });
  };
  return (
    <CartContext.Provider
      value={
        {
          cart: cart,
          toggle: toggleCartItem,
        } as CartState
      }
    >
      {children}
    </CartContext.Provider>
  );
}
