import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar fixed top-0 h-screen w-20 bg-[#1A1C1E] text-white">
      <ul className="p-4 flex-col justify-between items-center h-full">
        <div className="top">
          <li className="mb-2">
            <div className="flex items-center">
              <FaHome className="mr-2 mb-3" size={18} />
            </div>
          </li>
        </div>
      </ul>
    </aside>
  );
};
export default Sidebar;
