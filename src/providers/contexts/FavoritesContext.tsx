import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export type Favorite = {
  id: number;
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
  const [favorites, setFavorites] = useState<FavoritesState["favorites"]>(
    JSON.parse(localStorage.getItem("favorites") ?? "[]")
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavoriteItem = (favorite: Favorite) => {
    setFavorites((state) => {
      const foundIndex = state.findIndex((item) => item.id === favorite.id);

      if (foundIndex < 0) return [...state, favorite];
      else if (foundIndex >= 0)
        return state.filter((item) => item.id !== state[foundIndex].id);

      return state;
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
