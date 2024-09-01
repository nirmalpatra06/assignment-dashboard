import {
  Bell,
  CircleUser,
  Menu,
  MessageSquareMore,
  Search,
} from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full py-3 px-8 border-b border-b-gray-500">
      <div className="flex justify-between items-center gap-4">
        <div className="w-full flex gap-4 items-center">
          <button className="block lg:hidden">
            <Menu size={30} />
          </button>
          <div className="w-[180px] md:w-[350px] flex justify-center gap-4 items-center relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full mx-auto bg-gray-50 rounded-sm  border-[1px] text-black  font-semibold focus:outline-none focus:border-red-500 border-gray-300 shadow-sm px-2 py-1 pl-6 pr-10"
            />
            <Search className="text-gray-400 text-xl absolute top-1 right-3" />
          </div>
        </div>

        <div className="flex gap-4">
          <button>
            <Bell size={20} />
          </button>
          <button>
            <MessageSquareMore size={20} />
          </button>
          <button>
            <CircleUser size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
