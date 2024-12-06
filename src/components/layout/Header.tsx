import HeaderActions from "./HeaderActions";
import SearchField from "./SearchField";
import { Link } from "react-router-dom"


export default function Header() {
  return (
   <div className="w-[78.9%] mx-auto flex justify-between items-center">
     <Link to="/">
     <div className="w-[146px]">
      <img className="w-[100%]" src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" />
    </div>
     </Link>
  <SearchField/>
  <HeaderActions/>
   </div>
  )
}
