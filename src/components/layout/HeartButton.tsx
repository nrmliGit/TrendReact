import { Heart } from "lucide-react";
import { clickHandler } from "./Favorites";

interface HeartButtonProps {
  productId: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function HeartButton({
  productId,
  name,
  description,
  image,
  price,
}: HeartButtonProps) {
  return (
    <button
      onClick={() => clickHandler(productId, name, description, image, price)}
      className="border-2 border-[#ccc] border-solid rounded-full px-[5px] py-[2px]"
    >
      <Heart className="w-[20px] text-[#a9a8a8]" />
    </button>
  );
}
