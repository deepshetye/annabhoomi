import { Search } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HeaderNavigationMenu } from "./header-navigation";
import { CartSheet } from "./cart";

const Header = () => {
  return (
    <div className="w-[92%] border-b mx-auto py-4 grid grid-cols-12">
      <div className="col-span-1 flex items-center justify-center">
        <img src="/logo.svg" className="h-24 w-24" />
      </div>

      <div className="col-span-10 px-10 flex flex-col justify-center">
        <div className="border border-slate-400 mt-3 flex max-w-[500px] items-center px-4 rounded-md">
          <Search className="mr-2" size={20} />

          <input
            className=" w-full py-1.5 outline-none"
            placeholder="Search..."
          />
        </div>

        <HeaderNavigationMenu />
      </div>

      <div className="col-span-1 flex justify-end items-center gap-4">
        <FaUser className="h-6 w-6" />
        <CartSheet>
          <FaCartShopping className="h-6 w-6" />
        </CartSheet>
      </div>
    </div>
  );
};

export default Header;
