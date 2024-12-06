import { Link } from "react-router-dom"

const elements = [
    {
        name:"İndirim Kuponlarım",
        href:"/"
    },
    {
        name:"Trendyol'da Satış Yap",
         href:"/"
    },
    {
        name:"Hakkımızda",
         href:"/"
    },
    {
        name:"Yardım & Destek",
         href:"/"
    }
]

export default function HeaderTop() {
  return (
    <nav className="mt-[10px] mb-[10px] w-[78.9%] mx-auto flex">
        <ul className="flex gap-9 text-[#666666] text-[12px] ml-auto  font-normal ">
            {elements.map((item, index)=>(
                <li className="hover:text-[#3f3f3f]" key={index}>
                   <Link to={item.href}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}
