import { Heart, LogInIcon } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderActions() {
  return (
    <div className="w-[260px] text-[13px] font-semibold flex justify-between">
      <Link to="/loginPage" className="flex gap-1 hover:text-[#f27a1a]">
        <LogInIcon className="w-[18px]" /> Kaydol
      </Link>
      <Link to="/favorites" className="flex gap-1 hover:text-[#f27a1a]">
        <Heart className="w-[18px]" /> Favorilerim
      </Link>
      <Link to="/cartField" className="flex gap-1 hover:text-[#f27a1a]">
        <ShoppingCart className="w-[18px]" /> Sepetim
      </Link>
    </div>
  );
}
