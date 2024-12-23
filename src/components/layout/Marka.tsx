type Marka = {
  marka: string;
};

type ItemsType = {
  items: Marka[];
};

export default function Marka() {
  const markaList: Marka[] = [
    { marka: "Merry See" },
    { marka: "SOLDOY" },
    { marka: "CALLİEL" },
    { marka: "Cream Co." },
    { marka: "RİOMİ" },
    { marka: "Erbatab" },
    { marka: "meyra'nın ayakkabıları" },
    { marka: "Ayax" },
    { marka: "Luis Bien" },
    { marka: "KIKO" },
    { marka: "The Purest Solutions" },
    { marka: "SİLVER HOME" },
    { marka: "Elseve" },
    { marka: "Serstil" },
    { marka: "Safyaşam" },
    { marka: "SHE VEC" },
    { marka: "Elseve" },
    { marka: "TBRUSH" },
    { marka: "Kitchen Life" },
    { marka: "Hairens" },
  ];
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
          className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded"
        />
        <MarkaList items={markaList} />
      </div>
    </>
  );
}

function MarkaList({ items }: ItemsType) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-[13px]">
          <input type="checkbox" name="" id="" />

          <span>{item.marka}</span>
        </li>
      ))}
    </ul>
  );
}
