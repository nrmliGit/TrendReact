import {
  CalendarDays,
  Construction,
  Hourglass,
  House,
  KeyRound,
  MenuIcon,
  MessageCircleMore,
  NotepadText,
  ScanLine,
  ShieldAlert,
  ShoppingCart,
  SquareCheckBig,
  StickyNote,
  User,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type AsideDashboardProps = {
  isExpanded: boolean;
  toggleWidth: () => void;
};

const applicationItems = [
  {
    name: "Customer",
    icon: <Users />,
  },
  {
    name: "Product",
    icon: <ScanLine />,
  },
  {
    name: "Invoice",
    icon: <NotepadText />,
  },
  {
    name: "Order",
    icon: <ShoppingCart />,
  },
  {
    name: "Todo",
    icon: <SquareCheckBig />,
  },
];

const pagesItems = [
  {
    name: "Chat",
    icon: <MessageCircleMore />,
  },
  {
    name: "User Profile",
    icon: <User />,
  },
  {
    name: "Authentication",
    icon: <KeyRound />,
  },
  {
    name: "Error",
    icon: <ShieldAlert />,
  },
  {
    name: "Coming Soon",
    icon: <Hourglass />,
  },
  {
    name: "Maintenance",
    icon: <Construction />,
  },
  {
    name: "Blank Page",
    icon: <StickyNote />,
  },
];

export default function AsideDashboard({
  isExpanded,
  toggleWidth,
}: AsideDashboardProps) {
  return (
    <div className="bg-[#f27a1a] h-[100%] relative ">
      <div className="overflow-hidden ">
        <Link to="/">
          <div className="w-[120px] ml-[20px] mt-[10px] ">
            <img
              className="w-[100%]"
              src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
            />
          </div>
        </Link>
        <div className="flex">
          <House />
          <p>Dashboard</p>
          <span>0</span>
        </div>

        <div>
          <p>Application</p>
          <ul>
            {applicationItems.map((item, index) => (
              <li className="flex" key={index}>
                {item.icon} {item.name}
              </li>
            ))}
            <li className="flex justify-between ">
              <span className="flex">
                <CalendarDays /> Calendar
              </span>
              <span className="rounded-xl bg-[#3cb72c] w-[40px] h-[19px] pl-[6px]  text-white font-semibold text-[13px]">
                new
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p>Pages</p>
          <ul>
            {pagesItems.map((item, index) => (
              <li className="flex" key={index}>
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute right-[-55px] top-[22px] ">
        <button onClick={toggleWidth}>
          <MenuIcon className="text-[#8f9fbc] w-[30px] h-[30px] " />
        </button>
      </div>
    </div>
  );
}
