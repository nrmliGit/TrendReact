import {
  Favorite,
  useFavorites,
} from "../../providers/contexts/FavoritesContext";
import CartButton from "./CartButton";

export default function Favorites() {
  const { favorites } = useFavorites();
  return (
    <div className="w-[70%] mt-[20px] grid grid-cols-4 gap-x-20 gap-y-10 mx-auto">
      {favorites.length ? (
        favorites.map((favorite) => <FavoriteItem favorite={favorite} />)
      ) : (
        <div className="border border-1 border-[#f27a1a] p-[20px] w-[1000px]">
          Fovori ürününüz yok.
        </div>
      )}
    </div>
  );
}

function FavoriteItem({ favorite }: { favorite: Favorite }) {
  return (
    <>
      <div
        key={favorite.productId}
        id={`${favorite.productId}`}
        className="w-[228px] h-[445px] relative border-solid border border-[#ccc] rounded-lg"
      >
        <img className="mx-[27px] h-[267px]" src={favorite.image} />
        <div className="mx-[15px] my-[10px]">
          <p className="text-[13px] text-[#1B1B1B]">
            <span className="font-semibold text-[14px]"></span>{" "}
            {favorite.description}
          </p>
          <div className="text-[#878787] text-[13px] font-semibold ">
            <span>Mevcut Fiyat</span>
            <br />
            <span className="text-[14px]">{favorite.price} TL</span>
          </div>
        </div>
        <div className="flex justify-between left-[10px] right-[10px]  border  border-solid rounded absolute bottom-[10px] border-[#f27a1a]  p-[10px]">
          <CartButton item={favorite} />
        </div>
      </div>
    </>
  );
}
