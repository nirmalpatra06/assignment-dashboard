import Dashboard from "@/components/Dashboard";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <NavBar />
        <Dashboard />
      </div>
    </div>
  );
}
