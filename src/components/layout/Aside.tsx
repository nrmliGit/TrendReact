import Marka from "./Marka";
import Price from "./Price";

export default function Aside() {
  return (
    <div className="flex flex-col gap-3 h-[100%] relative overflow-y-hidden">
      <Marka />
      <Price />
    </div>
  );
}
