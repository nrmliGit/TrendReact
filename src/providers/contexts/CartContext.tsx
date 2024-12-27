import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

type CartState = {
  cart: Array<CartItem>;
  toggle?: (cartItem: CartItem) => void;
  removeItem?: (CartItem: CartItem) => void;
  addItem?: (addItem: CartItem) => void;
};

const CartContext = createContext<CartState>({
  cart: [],
});

export const useCart = () => useContext(CartContext);
export default function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartState["cart"]>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleCartItem = (cartItem: CartItem) => {
    setCart((state) => {
      const foundIndex = state.findIndex((item) => item.id === cartItem.id);
      if (foundIndex < 0) return [...state, cartItem];
      else if (foundIndex >= 0)
        return state.filter((item) => item.id !== state[foundIndex].id);

      return state;
    });
  };

  const addToCart = (addItem: CartItem) => {
    setCart((state) => {
      const foundIndex = state.findIndex((item) => item.id === addItem.id);
      if (foundIndex < 0) return [...state, addItem];
      return state;
    });
  };

  const deleteCartItem = (cartItem: CartItem) => {
    setCart((state) => {
      const foundIndex = state.findIndex((item) => item.id === cartItem.id);

      if (foundIndex >= 0) {
        return state.filter((item) => item.id !== state[foundIndex].id);
      }
      return state;
    });
  };
  return (
    <CartContext.Provider
      value={
        {
          cart: cart,
          toggle: toggleCartItem,
          removeItem: deleteCartItem,
          addItem: addToCart,
        } as CartState
      }
    >
      {children}
    </CartContext.Provider>
  );
}
