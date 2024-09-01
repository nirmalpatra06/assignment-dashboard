import Image from "next/image";
import logo from "../public/logo.png";
import {
  CalendarCheck2,
  Headset,
  LayoutDashboard,
  Settings,
  ShieldEllipsis,
  UserRoundPlus,
  Users,
} from "lucide-react";
const Sidebar: React.FC = () => (
  <aside className="hidden md:w-20 lg:w-64 bg-gray-50 border-r border-r-gray-300 min-h-screen p-4 md:flex flex-col gap-4">
    <div className="mb-8 flex items-center gap-2">
      <Image alt="logo" src={logo} className="w-8 h-8" />
      <h1 className="text-blue-800 font-bold hidden lg:block">Vasitum</h1>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-500 font-semibold text-xs">MAIN MENU</h3>
      <button className="flex  gap-4 text-red-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <LayoutDashboard size={20} />
        <span className="hidden lg:block">Dashboard</span>
      </button>
      <button className="flex gap-4 text-gray-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <UserRoundPlus size={20} />
        <span className="hidden lg:block">Recruitment</span>
      </button>
      <button className="flex gap-4 text-gray-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <CalendarCheck2 size={20} />
        <span className="hidden lg:block">Schedule</span>
      </button>
      <button className="flex  gap-4 text-gray-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <Users size={20} />
        <span className="hidden lg:block">Employee</span>
      </button>
      <button className="flex gap-4 text-gray-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <ShieldEllipsis size={20} />
        <span className="hidden lg:block">Department</span>
      </button>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-gray-500 font-semibold text-xs">OTHER</h3>
      <button className="flex gap-4 text-gray-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <Headset size={20} />
        <span className="hidden lg:block">Support</span>
      </button>
      <button className="flex gap-4 text-gray-500 font-semibold p-1 hover:bg-gray-200 rounded-md">
        <Settings size={20} />
        <span className="hidden lg:block">Settings</span>
      </button>
    </div>
  </aside>
);

export default Sidebar;
