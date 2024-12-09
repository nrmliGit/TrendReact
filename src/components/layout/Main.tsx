import Aside from "./Aside";
import ProductsGrid from "./ProductsGrid";

export default function Main() {
  return (
    <div className="my-[20px] w-[78.9%] mx-auto grid grid-cols-[200px_1fr] ">
      <Aside />
      <ProductsGrid />
    </div>
  );
}
