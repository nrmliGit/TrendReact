import { CartItem, useCart } from "../../providers/contexts/CartContext";
import DeleteButton from "./DeleteButton";

export default function Favorites() {
  const { cart } = useCart();
  return (
    <div className="w-[70%] mt-[20px] grid grid-cols-4 gap-x-20 gap-y-10 mx-auto">
      {cart.length ? (
        cart.map((cartProduct) => <CartProduct cartItem={cartProduct} />)
      ) : (
        <div className="border border-1 border-[#f27a1a] p-[20px] w-[1000px]">
          Sepette seçilmiş ürün yok.
        </div>
      )}
    </div>
  );
}

function CartProduct({ cartItem }: { cartItem: CartItem }) {
  return (
    <>
      <div className="w-[228px] h-[445px] relative border-solid border border-[#ccc] rounded-lg">
        <img className="mx-[27px] h-[267px]" src={cartItem.image} />
        <div className="mx-[15px] my-[10px]">
          <p className="text-[13px] text-[#1B1B1B]">
            <span className="font-semibold text-[14px]"></span>{" "}
            {cartItem.description}
          </p>
          <div className="text-[#878787] text-[13px] font-semibold ">
            <span>Mevcut Fiyat</span>
            <br />
            <span className="text-[14px]">{cartItem.price} TL</span>
          </div>
        </div>

        <DeleteButton item={cartItem} />
      </div>
    </>
  );
}
