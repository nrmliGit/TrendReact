import { useProducts } from "../../providers/contexts/ProductContext";
import { takeValueOfPrice } from "../../providers/contexts/utils";

export type Price = {
  price: string;
  value: string;
  id: number;
};

export default function Price() {
  const priceList: Price[] = [
    { id: 1, price: "100TL - 200TL", value: "100-200" },
    { id: 2, price: "200TL - 300TL", value: "200-300" },
    { id: 3, price: "300TL - 400TL", value: "300-400" },
    { id: 4, price: "400TL - 500TL", value: "400-500" },
    { id: 5, price: "500TL - 600TL", value: "500-600" },
    { id: 6, price: "600TL - 1000TL", value: "600-1000" },
    { id: 7, price: "1000TL - 1500TL", value: "1000-1500" },
    { id: 8, price: "1500TL - 2000TL", value: "1500-2000" },
    { id: 9, price: "2000TL - 3000TL", value: "2000-3000" },
  ];

  const valueToNumber = () => {
    priceList.map((item) => {
      const min = Number(item.value.split("-")[0]);
      const max = Number(item.value.split("-")[1]);
      return [min, max];
    });
  };

  const { priceCheckList } = useProducts();
  const values = takeValueOfPrice(priceCheckList);

  return (
    <>
      <div className="max-h-[280px] overflow-y-auto ">
        <div className="pt-[12px]">
          <p className="mb-[5px] text-[14px]">Fiyat</p>
        </div>
        <div className="flex justify-between w-[150px]">
          <input
            type="search"
            name=""
            id=""
            value={valueToNumber}
            onChange={(e) => {}}
            className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[7px] bg-[#fafafa] h-[27px] rounded w-[60px]"
          />
          <span>-</span>
          <input
            type="search"
            name=""
            id=""
            value={values ? values[1] : ""}
            onChange={(e) => {}}
            className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[7px] bg-[#fafafa] h-[27px] rounded w-[60px]"
          />
        </div>
        <PriceList items={priceList} />
      </div>
    </>
  );
}

function PriceList({ items }: { items: Price[] }) {
  const { setPriceCheckList } = useProducts();

  const handleOnChecked = (checkedItem: boolean, item: Price) => {
    setPriceCheckList((state) => {
      if (checkedItem) return [item];
      return state.filter((price) => price.id !== item.id);
    });
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-[13px]">
          <input
            type="radio"
            value={item.value}
            name="price_filter"
            // onChange={(e) => handleOnChecked(e.target.checked, item)}
            onChange={(e) => console.log(e.target.value)}
          />
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
  );
}
