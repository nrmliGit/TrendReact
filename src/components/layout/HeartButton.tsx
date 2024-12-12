import { Heart } from "lucide-react";

import { useFavorites } from "../../providers/contexts/FavoritesContext";

interface HeartButtonProps {
  productId: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function HeartButton({ item }: { item: HeartButtonProps }) {
  const { toggle } = useFavorites();
  return (
    <button
      onClick={() =>
        toggle?.({
          description: item.description,
          image: item.image,
          name: item.name,
          price: item.price,
          productId: Number(item.productId),
        })
      }
      className="border-2 border-[#ccc] border-solid rounded-full px-[5px] py-[2px]"
    >
      <Heart className="w-[20px] text-[#a9a8a8]" />
    </button>
  );
}
