import HeartButton from "./HeartButton";
import CartButton from "./CartButton";
import { Product } from "../../providers/contexts/ProductContext";

type ProductItemProps = {
  product: Product;
};

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <>
      <div
        key={product.id}
        id={`${product.id}`}
        className="w-[228px] h-[445px] relative border-solid border border-[#ccc] rounded-lg"
      >
        <img className="mx-[27px] h-[267px]" src={product.image} />
        <div className="mx-[15px] my-[10px]">
          <p className="text-[13px] text-[#1B1B1B]">
            <span className="font-semibold text-[14px]">{product.name}</span>{" "}
            {product.description}
          </p>
          <div className="text-[#878787] text-[13px] font-semibold ">
            <span>Mevcut Fiyat</span>
            <br />
            <span className="text-[14px]">{product.price} TL</span>
          </div>
        </div>
        <div>
          <CartButton item={product} />
          <HeartButton item={product} />
        </div>
      </div>
    </>
  );
}
