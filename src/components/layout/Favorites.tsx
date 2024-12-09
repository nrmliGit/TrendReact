import { useEffect, useState } from "react";

let obj = {
  productId: 0,
  name: "",
  description: "",
  image: "",
  price: 0,
};

export const clickHandler = (
  productId: number,
  name: string,
  description: string,
  image: string,
  price: number
) => {
  obj = {
    productId,
    name,
    description,
    image,
    price,
  };
};

export default function Favorites() {
  const [datas, setDatas] = useState<{}[]>([]);
  useEffect(() => {
    setDatas((prevDatas) => [...prevDatas, obj]);
  }, []);

  console.log(datas);

  return (
    <div className="w-[80%] mx-auto">
      <div className="w-[228px] h-[445px] relative border-solid border border-[#ccc] rounded-lg">
        <img className="mx-[27px] h-[267px]" src={obj.image} />
        <div className="mx-[15px] my-[10px]">
          <p className="text-[13px] text-[#1B1B1B]">
            <span className="font-semibold text-[14px]"></span>{" "}
            {obj.description}
          </p>
          <div className="text-[#878787] text-[13px] font-semibold ">
            <span>Mevcut Fiyat</span>
            <br />
            <span className="text-[14px]">{obj.price} TL</span>
          </div>
        </div>
        <div className="flex justify-between left-[10px] right-[10px]  border  border-solid rounded absolute bottom-[10px] border-[#f27a1a]  p-[10px]">
          <button className=" text-[#f27a1a]">Sepete ekle</button>
        </div>
      </div>
    </div>
  );
}
