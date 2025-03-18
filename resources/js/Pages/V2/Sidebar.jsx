import { Badge, ChevronsLeftRightEllipsis, MapPin } from "lucide-react";
import { useState } from "react";
import AccordionHead from "@/Components/Menu/AccordionHead";
import { Link } from "@inertiajs/react";

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

const MenuButton = ({ name, icon, href, activeMenu }) => {
  return (
    <Link
      href={href}
      className={`flex flex-col gap-2 p-4 rounded-lg shadow-md  ${
        activeMenu === name
          ? "border-2 border-blue-500 bg-blue-100"
          : "border border-gray-200 bg-gray-200 hover:bg-gray-100"
      }`}
    >
      {icon}
      <p className="font-medium text-lg text-left">{name}</p>
    </Link>
  );
};

const Sidebar = ({ content, activeMenu }) => {
  const [showMenuOptions, setShowMenuOptions] = useState(true);

  const toggleMenuOptions = () => {
    setShowMenuOptions(!showMenuOptions);
  };

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen px-3 py-4 transition-transform -translate-x-full sm:translate-x-0 overflow-y-scroll"
      aria-label="Sidebar"
      style={{ scrollbarWidth: "none" }}
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
              <MenuButton
                name="Point"
                icon={<MapPin />}
                href="/map/points"
                activeMenu={activeMenu}
              />
              <MenuButton
                name="Line"
                icon={<ChevronsLeftRightEllipsis />}
                activeMenu={activeMenu}
              />
              <MenuButton
                name="Polygon"
                icon={<Badge />}
                activeMenu={activeMenu}
              />
            </div>
          )}
          <div>{content}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
