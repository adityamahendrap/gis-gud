import Map from "./Map";
import Sidebar from "./Sidebar";

const Index = () => {
  if (typeof window === "undefined") return null;

  return (
    <>
      <Sidebar />
      <div className="sm:ml-64">
        <Map></Map>
      </div>
    </>
  );
};

export default Index;
