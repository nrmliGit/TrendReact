import { Heart } from "lucide-react";

import { useFavorites } from "../../providers/contexts/FavoritesContext";
import { Product } from "../../providers/contexts/ProductContext";

export default function HeartButton({ item }: { item: Product }) {
  const { toggle } = useFavorites();
  return (
    <button
      onClick={() =>
        toggle?.({
          description: item.description,
          image: item.image,
          name: item.name,
          price: item.price,
          id: Number(item.id),
        })
      }
      className="border-2 border-[#ccc] hover:border-[#f27a1a] border-solid rounded-full px-[5px] py-[2px] absolute right-[15px] bottom-[17px]"
    >
      <Heart className="w-[20px] hover:text-[#f27a1a] text-[#a9a8a8]" />
    </button>
  );
}
