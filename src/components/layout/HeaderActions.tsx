import { Heart } from "lucide-react"
import { ShoppingCart } from "lucide-react"
import {Link} from "react-router-dom"

export default function HeaderActions() {
  return (
    <div className="w-[260px] text-[13px] font-semibold flex justify-between">
        <Link to="/favorites" className="flex gap-1 hover:text-[#f27a1a]"><Heart className="w-[18px]"/> Fovorilerim</Link>
        <Link to="/cartField" className="flex gap-1 hover:text-[#f27a1a]"><ShoppingCart  className="w-[18px]"/> Sepetim</Link>
    </div>
  )
}