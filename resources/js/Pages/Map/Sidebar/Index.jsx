import { Badge, ChevronsLeftRightEllipsis, MapPin } from "lucide-react";
import { useState } from "react";
import { useGlobalState } from "@/State/Global";
import AccordionHead from "@/Components/Menu/AccordionHead";
import Point from "../Point/Index";

const Title = () => {
  return (
    <div className="pb-2">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">GIS</h1>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Geographic Information System
      </p>
    </div>
  );
};

const MenuButton = ({ name, icon }) => {
  const { activeMenu, changeMenu } = useGlobalState();

  return (
    <button
      className={`flex flex-col gap-2 p-4 rounded-lg shadow-md  ${
        activeMenu === name
          ? "border-2 border-blue-500 bg-blue-100"
          : "border border-gray-200 bg-gray-200 hover:bg-gray-100"
      }`}
      onClick={() => changeMenu(name)}
    >
      {icon}
      <p className="font-medium text-lg text-left">{name}</p>
    </button>
  );
};

const Sidebar = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(true);
  const { activeMenu } = useGlobalState();

  const toggleMenuOptions = () => {
    setShowMenuOptions(!showMenuOptions);
  };

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen px-3 py-4 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div>
        <div className="h-full overflow-y-auto bg-white dark:bg-gray-800">
          <Title />
          <AccordionHead
            title="Menu"
            onClick={toggleMenuOptions}
            isActive={showMenuOptions}
          />
          {showMenuOptions && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <MenuButton name="Point" icon={<MapPin />} />
              <MenuButton name="Line" icon={<ChevronsLeftRightEllipsis />} />
              <MenuButton name="Polygon" icon={<Badge />} />
            </div>
          )}
        </div>
        <div>{activeMenu === "Point" && <Point />}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
