import ProductItem from "./ProductItem";
import { useProducts } from "../../providers/contexts/ProductContext";
import CartButton from "./CartButton";
import HeartButton from "./HeartButton";
export default function ProductsGrid() {
  const { filteredProducts } = useProducts();
  const { products } = useProducts();
  return (
    <div className="grid grid-cols-4 gap-x-20 gap-y-10">
      {filteredProducts.length ? (
        filteredProducts.map((item) => (
          <ProductItem key={item.id} product={item} />
        ))
      ) : products.length ? (
        products.map((item) => (
          <div
            key={item.id}
            id={`${item.id}`}
            className="w-[228px] h-[445px] relative border-solid border border-[#ccc] rounded-lg"
          >
            <img className="mx-[27px] h-[267px]" src={item.image} />
            <div className="mx-[15px] my-[10px]">
              <p className="text-[13px] text-[#1B1B1B]">
                <span className="font-semibold text-[14px]">{item.name}</span>{" "}
                {item.description}
              </p>
              <div className="text-[#878787] text-[13px] font-semibold ">
                <span>Mevcut Fiyat</span>
                <br />
                <span className="text-[14px]">{item.price} TL</span>
              </div>
            </div>
            <div>
              <CartButton item={item} />
              <HeartButton item={item} />
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
