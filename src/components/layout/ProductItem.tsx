import { useEffect, useState } from "react"
import axios from "axios"

interface Product {
  id:number;
  image: string;
  name:string;
  description: string;
  price: number; // Add other properties like 'name', 'price', etc., if needed
}

export default function ProductItem() {
const [data, setData] = useState<Product[]>([])
useEffect(()=>{
  axios.get<Product[]>('http://localhost:3000/datas')
  .then(res=> setData(res.data))
  .catch(err=> console.log(err))
},[])

  return (
    <>
    {data.map((item)=>(
      <div key={item.id} className="w-[228px]  border-solid border border-[#ccc]] rounded-lg"> 
       <img className="mx-[27px] h-[267px]" src={item.image}/>
      <div className="mx-[15px] my-[10px]">
        <p className="text-[13px] text-[#1B1B1B]"><span className="font-semibold text-[14px]">{item.name}</span> {item.description}</p>
        <div className="text-[#878787] text-[13px] font-semibold ">
        <span>Mevcut Fiyat</span><br/>
        <span className="text-[14px]">{item.price} TL</span>
        </div>
      </div></div>
    ))}
    </>
  )
}
