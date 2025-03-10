import { ChevronDown, Minus } from "lucide-react";

const AccordionHead = ({ title, onClick, isActive, color }) => {
  return (
    <div
      className="cursor-pointer flex justify-between items-center py-1 hover:bg-gray-50"
      onClick={onClick}
    >
      <div className=" flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${color ?? "bg-yellow-300"}`}></div>
        <h1 className="font-bold text-gray-500 text-sm">{title}</h1>
      </div>
      {isActive ? <Minus /> : <ChevronDown />}
    </div>
  );
};

export default AccordionHead;
