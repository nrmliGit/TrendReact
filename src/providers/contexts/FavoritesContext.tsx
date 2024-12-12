import { createContext, PropsWithChildren, useContext, useState } from "react";

export type Favorite = {
  productId: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

type FavoritesState = {
  favorites: Array<Favorite>;
  toggle?: (favorite: Favorite) => void;
};

const FavoritesContext = createContext<FavoritesState>({
  favorites: [],
});

export const useFavorites = () => useContext(FavoritesContext);

export default function FavoritiesProvider({ children }: PropsWithChildren) {
  const [favorites, setFavorites] = useState<FavoritesState["favorites"]>([]);

  const toggleFavoriteItem = (favorite: Favorite) => {
    setFavorites((state) => {
      const foundIndex = state.findIndex(
        (item) => item.productId === favorite.productId
      );
      console.log(foundIndex);
      if (foundIndex < 0) {
        return [...state, favorite];
      } else {
        return state.filter((item) => item.productId !== favorite.productId);
      }
    });
  };

  return (
    <FavoritesContext.Provider
      value={
        {
          favorites: favorites,
          toggle: toggleFavoriteItem,
        } as FavoritesState
      }
    >
      {children}
    </FavoritesContext.Provider>
  );
}
