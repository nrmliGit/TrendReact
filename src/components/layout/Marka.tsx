import { useState } from "react";
import { useProducts } from "../../providers/contexts/ProductContext";

export type Marka = {
  marka: string;
  id: number;
};

const markaList: Marka[] = [
  { id: 1, marka: "Merry See" },
  { id: 2, marka: "SOLDOY" },
  { id: 3, marka: "CALLİEL" },
  { id: 4, marka: "Cream Co." },
  { id: 5, marka: "RİOMİ" },
  { id: 6, marka: "Erbatab" },
  { id: 7, marka: "meyra'nın ayakkabıları" },
  { id: 8, marka: "Ayax" },
  { id: 9, marka: "Luis Bien" },
  { id: 10, marka: "KIKO" },
  { id: 11, marka: "The Purest Solutions" },
  { id: 12, marka: "SİLVER HOME" },
  { id: 13, marka: "Elseve" },
  { id: 14, marka: "Serstil" },
  { id: 15, marka: "Safyaşam" },
  { id: 16, marka: "SHE VEC" },
  { id: 17, marka: "Elseve" },
  { id: 18, marka: "TBRUSH" },
  { id: 19, marka: "Kitchen Life" },
  { id: 20, marka: "Hairens" },
];

export default function Marka() {
  const [filteredBrands, setFilteredBrands] = useState<Marka[]>(markaList);
  const handleFilteredBrands = (value: string) => {
    setFilteredBrands((state) => {
      if (value !== "") {
        return state.filter((brand) =>
          brand.marka.toLocaleUpperCase().includes(value.toLocaleUpperCase())
        );
      } else return markaList;
    });
  };
  return (
    <>
      <div className="max-h-[280px] overflow-y-auto ">
        <div className="pt-[12px]">
          <p className="mb-[5px] text-[14px]">Marka</p>
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="Marka ara"
          onChange={(e) => handleFilteredBrands(e.target.value)}
          className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded"
        />
        <MarkaList items={filteredBrands} />
      </div>
    </>
  );
}

function MarkaList({ items }: { items: Marka[] }) {
  const { setBrandCheckList } = useProducts();

  const handleOnChecked = (checkedItem: boolean, item: Marka) => {
    setBrandCheckList((state) => {
      if (checkedItem) return [...state, item];
      return state.filter((brand) => brand.id !== item.id);
    });
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-[13px]">
          <input
            type="checkbox"
            onChange={(e) => handleOnChecked(e.target.checked, item)}
          />

          <span>{item.marka}</span>
        </li>
      ))}
    </ul>
  );
}
