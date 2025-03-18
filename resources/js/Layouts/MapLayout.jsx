import Map from "@/Pages/V2/Map";
import Sidebar from "@/Pages/V2/Sidebar";
import { usePage } from "@inertiajs/react";

const MapLayout = ({ children, points, state }) => {
  if (typeof window === "undefined") return null;

  const { name } = usePage().props;

  return (
    <>
      <Sidebar content={children}  activeMenu={name}/>
      <div className="sm:ml-64">
        <Map points={points} state={state}/>
      </div>
    </>
  );
};

export default MapLayout;
