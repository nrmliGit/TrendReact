import { useCart } from "../../providers/contexts/CartContext";

interface CartButtonProps {
  productId: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function CartButton({ item }: { item: CartButtonProps }) {
  const { toggle } = useCart();
  return (
    <>
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
        className=" text-[#f27a1a]"
      >
        Sepete ekle
      </button>
    </>
  );
}
