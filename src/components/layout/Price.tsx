type Price = {
  price: string;
};

type ItemsType = {
  items: Price[];
};

export default function Price() {
  const priceList: Price[] = [
    { price: "100TL - 200TL" },
    { price: "200TL - 300TL" },
    { price: "300TL - 400TL" },
    { price: "400TL - 500TL" },
    { price: "500TL - 600TL" },
    { price: "600TL - 1000TL" },
    { price: "1000TL - 1500TL" },
    { price: "1500TL - 2000TL" },
    { price: "2000TL +" },
  ];
  return (
    <>
      <div className="max-h-[280px] overflow-y-auto ">
        <div className="pt-[12px]">
          <p className="mb-[5px] text-[14px]">Fiyat</p>
        </div>
        <input
          type="search"
          name=""
          id=""
          placeholder="Marka ara"
          className="border-[1px] border-[#999] mb-[10px] text-[11px] px-[10px] bg-[#fafafa] h-[27px] rounded"
        />
        <PriceList items={priceList} />
      </div>
    </>
  );
}

function PriceList({ items }: ItemsType) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-[13px]">
          <input type="radio" name="" id="" />

          <span>{item.price}</span>
        </li>
      ))}
    </ul>
  );
}
