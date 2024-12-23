import { useCart } from "../../providers/contexts/CartContext";
import { Product } from "../../providers/contexts/ProductContext";

export default function DeleteButton({ item }: { item: Product }) {
  const { removeItem } = useCart();
  return (
    <>
      <button
        onClick={() =>
          removeItem?.({
            description: item.description,
            image: item.image,
            name: item.name,
            price: item.price,
            id: Number(item.id),
          })
        }
        className="flex justify-between left-[10px] right-[10px]  text-[#f27a1a] border  border-solid rounded absolute bottom-[10px] border-[#f27a1a]  p-[10px]"
      >
        Sil
      </button>
    </>
  );
}
